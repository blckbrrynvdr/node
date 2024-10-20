import express, {Router} from "express";
import api from "./api";
import pages from "./pages";

const router = Router();

router.use('/api', express.json(), api);
router.use('/', pages);

export default router;