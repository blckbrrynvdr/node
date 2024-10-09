import {error404} from "../../middleware/404";

const router = require('express').Router();
const books = require('./books');
const user = require('./user');


router.use('/books', books);
router.use('/user', user);


router.use(error404);

module.exports = router;
