import uuid from "uuid";

export class Book {
	title = '';
	description = '';
	authors = '';
	favorite = '';
	fileCover = '';
	fileName = '';
	fileBook = '';
	id = uuid();
	constructor(
		{
			title = '',
			description = '',
			authors = '',
			favorite = '',
			fileCover = '',
			fileName = '',
			fileBook = '',
			id = uuid()
		}
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.authors = authors;
		this.favorite = favorite;
		this.fileCover = fileCover;
		this.fileName = fileName;
		this.fileBook = fileBook;
	}
}
