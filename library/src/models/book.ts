import {Schema, model} from 'mongoose';
import {Book} from "../interfaces/book";

const bookSchema = new Schema({
	_id: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: '',
	},
	authors: {
		type: String,
		default: '',
	},
	favorite: {
		type: String,
		default: '',
	},
	fileCover: {
		type: String,
		default: '',
	},
	fileName: {
		type: String,
		default: '',
	},
	fileBook: {
		type: String,
		default: '',
	},
});

export const BookModel = model('Book', bookSchema);