import books from '../assets/books';
import { combineReducers } from 'redux';
import { ADD_BOOK, DELETE_BOOOK } from './actionType';


const bookReducer = (booksState = books, action) => {
    switch (action.type) {
        case ADD_BOOK:
            let book = action.payload;
            book.id = booksState.length;
            return booksState.concat(book);

            
        case DELETE_BOOOK:
            let bookID = action.bookID;
            console.log(bookID);
            const remainBook = booksState.filter(book => book.id!==bookID)
            return remainBook;

        default:
            return booksState;
    }
}

export const reducer = combineReducers({
    books: bookReducer
})