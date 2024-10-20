import {BooksRepositoryClass} from './abstract/books-repository.class';
import {BookModel} from "../models/book";
import {Book, CreateBookDto} from "../interfaces/book";
import {decorate, injectable} from "inversify";

decorate(injectable(), BooksRepositoryClass);
export class BooksRepository extends BooksRepositoryClass {
	async createBook(book: CreateBookDto): Promise<Book> {
		const newBook = new BookModel(book);
		await newBook.save();
		return newBook as Book;
	}

	async getBook(id: string): Promise<Book | null> {
		return BookModel.findById(id).select('-__v');
	}

	async getBooks(): Promise<Book[]> {
		return BookModel.find().select('-__v');
	}

	async updateBook(id: string, book: Book): Promise<Book | null> {
		return await BookModel.findByIdAndUpdate(id, book).select('-__v');
	}

	async deleteBook(id: string): Promise<string> {
		await BookModel.deleteOne({_id: id});
		return id;
	}
}

