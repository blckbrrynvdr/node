import 'reflect-metadata';
import {errorHandler} from "./middleware/error-handler";
import config from "./infrastructure/config";
import express from "express";
import routes from "./routes";
import * as path from "path";
import './infrastructure/mongoose';

const app = express();

async function start(PORT: any) {
	try {
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		})
	} catch (e) {
		console.error(e)
	}
}

app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use('/', routes);
app.use(errorHandler);

const PORT = config.PORT;
start(PORT);
