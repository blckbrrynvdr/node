import config from "../infrastructure/config";
import mongoose from "mongoose";

mongoose.connect(config.URL_DB, { dbName: 'books' });

mongoose.connection.on('open', () => {
	console.log('Connected to mongodb')
})
