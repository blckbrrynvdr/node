export interface Book {
	title: string,
	description: string,
	authors: string,
	favorite: string,
	fileCover: string,
	fileName: string,
	fileBook: string,
	_id : string,
}

export interface CreateBookDto {
	title: Book['title'],
	description: Book['description'],
	authors: Book['authors'],
	favorite: Book['favorite'],
	fileCover: Book['fileCover'],
	fileName: Book['fileName'],
	fileBook: Book['fileBook'],
}