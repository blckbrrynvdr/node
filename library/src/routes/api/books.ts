import {fileMulter} from "../../middleware/file";
import {Router} from 'express';
import {v4 as uuid} from 'uuid';
import {BooksRepository} from "../../classes/book";
import container from "../../infrastructure/container";

const router = Router();
const repo: BooksRepository = container.get(BooksRepository);

router.get('/', async (req: any, res: any) => {
    try {
        const books = await repo.getBooks();
        res.status(201).json(books);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id', async (req: any, res: any) => {
    const {id} = req.params;

    try {
        const book = await repo.getBook(id);
        if (!book) {
            res.status(404).json('404');
        }
        res.status(201).json(book);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/', fileMulter.single('fileBook'), async (req: any, res: any) => {
    try {
        const newBook = await repo.createBook({
            ...req.body,
            _id: uuid(),
            fileName: req.file ? req.file.path : ''
        });

        res.status(201).json(newBook);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.put('/:id', fileMulter.single('fileBook'), async (req: any, res: any) => {
    const {id} = req.params;
    try {
        const book = await repo.updateBook(id, {
            ...req.body,
            fileName: req.file ? req.file.path : '',
        });
        if (!book) {
            res.status(404).json('404');
        }
        res.status(201).json(book);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:id', async (req: any, res: any) => {
    const {id} = req.params;
    try {
        await repo.deleteBook(id);
        res.status(201).json('ok');
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/:id/download', async (req: any, res: any) => {
    const {id} = req.params;
    try {
        const book = await repo.getBook(id);
        if (!book || !book?.fileName) {
            res.status(404).json('404');
        }
        res.download(`./${book?.fileName}`);
    } catch (e) {
        res.status(500).json(e);
    }
});

export default router;
