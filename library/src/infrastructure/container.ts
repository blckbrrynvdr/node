import {Container, decorate, injectable} from 'inversify';
import {BooksRepository} from "../classes/book";


const container = new Container();

decorate(injectable(), BooksRepository);
container.bind(BooksRepository).toSelf();

export default container;