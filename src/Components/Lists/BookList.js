import React from 'react';
import Book from '../Representational/Book';
import { Link } from 'react-router-dom';

const BookList = (props) => {
    return (
        <div>
            {
                props.books.map((book) => (
                    <Link to={"/book/"+book.id} style={{textDecoration: 'none', color: 'Black'}} >
                        <Book
                            bookName={book.bookName}
                            writer={book.writer}
                            key={book.id}
                            selectedBookHandler={() => props.selectedBookHandler(book)}

                        />
                    </Link>
                )
                )
            }


        </div>
    );
};

export default BookList;