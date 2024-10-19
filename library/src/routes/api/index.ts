import {error404} from "../../middleware/404";
import {Router} from 'express';
import books from "./books";
import user from "./user";

const router = Router();

router.use('/books', books);
router.use('/user', user);


router.use(error404);

export default router;
