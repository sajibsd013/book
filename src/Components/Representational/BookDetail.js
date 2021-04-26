import React from 'react';

const BookDetail = props => {
    console.log(props.book);
    if(props.book===null) return <div></div>
    return (
        <div>
            <h4>{props.book.bookName}</h4>
            <h6>{props.book.writer}</h6>
            <p>{props.book.description}</p>
        </div>
    );
};

export default BookDetail;