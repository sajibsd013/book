import React from 'react';
import Book from '../Representational/Book';
import { Link } from 'react-router-dom';

const BookList = (props) => {
    return (
        <div>
            {
                props.books.map((book) => (
  
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        key ={book.id}
                        selectedBookHandler={() => props.selectedBookHandler(book)}
                        deleteBookHandler={() => props.deleteBookHandler(book)}
                    />
                    )
                )
            }

        </div>
    );
};

export default BookList;