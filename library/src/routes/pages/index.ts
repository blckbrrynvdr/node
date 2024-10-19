import {page404} from "../../middleware/page-404";
import {Router} from "express";
import {v4 as uuid} from 'uuid';
import container from '../../infrastructure/container';
import {BooksRepository} from '../../classes/book';
import redisClient from '../../infrastructure/redis';

const router = Router();
const repo: BooksRepository = container.get(BooksRepository);


router.get('/', async (req, res) => {
    let books;
    try {
        books = await repo.getBooks();
    } catch (e) {
        res.redirect('/404');
    }
    res.render('pages/index', {
        title: 'Главная',
        books: books,
    })
});

router.get('/book/create', (req, res) => {
    res.render('pages/create', {
        title: 'Книги | создать',
        book: {},
    });
});

router.post('/book/create', async (req, res) => {
    try {
        await repo.createBook({
            ...req.body, _id: uuid(),
        });
    } catch (e) {
        res.redirect('/');
    }
    res.redirect('/');
});

router.get('/book/:id', async (req, res) => {
    const {id} = req.params;
    let book;

    try {
        book = await repo.getBook(id);
        if (!book) {
            res.redirect('/404');
        }
    } catch (e) {
        res.redirect('/404');
    }

    const views = await redisClient.incr(id);

    res.render('pages/view', {
        title: 'Просмотр книги | ' + book?.title,
        book,
        views
    });
});

router.get('/book/update/:id', async (req, res) => {
    const {id} = req.params;
    let book;

    try {
        book = await repo.getBook(id);
    } catch (e) {
        res.redirect('/404');
    }

    res.render('pages/update', {
        title: 'Обновление книги | ' + book?.title,
        book
    });
});

router.post('/book/update/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const book = await repo.updateBook(id, {
            ...req.body,
        });
        if (!book) {
            res.status(404).json('404');
        }
        if (book?._id) {
            res.redirect(`/book/${book._id}`);
        }
    } catch (e) {
        res.redirect('/404');
    }
});


router.post('/book/delete/:id', async (req, res) => {
    const {id} = req.params;

    try {
        await repo.deleteBook(id);
    } catch (e) {
        res.redirect('/404');
    }
    res.redirect(`/`);
});

router.use(page404);

export default router;