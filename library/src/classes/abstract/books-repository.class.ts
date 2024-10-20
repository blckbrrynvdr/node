import {Book, CreateBookDto} from "../../interfaces/book";
import {injectable} from "inversify";

export abstract class BooksRepositoryClass {
	abstract createBook(book: CreateBookDto): Promise<Book>;

	abstract getBook(id: string): Promise<Book | null>;

	abstract getBooks(): Promise<Book[]>;

	abstract updateBook(id: string, book: Book): Promise<Book | null>;

	abstract deleteBook(id: string): Promise<string>;
}