import React, { Component } from 'react';
import './Book.css';

class Book extends Component {

    render(){
        return(
            <div className="Book" onClick={this.props.selectedBookHandler}>
                <h3>Book : {this.props.bookName}</h3>
                <h4 >Name: {this.props.writer} </h4>
            </div>
        )
    }
}
export default Book;

