import { Button } from 'reactstrap';
import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    confirmDelet = () => {
        if (window.confirm("Do you want delete book ? ")) {
            this.props.deleteBookHandler();
        }
    }

    render() {
        return (
            <div className="Book p-4 my-3" >
                <h4>Book : {this.props.bookName}</h4>
                <h5 >Name: {this.props.writer} </h5>
                <Button
                    className='mx-2 mt-4'
                    color='primary'
                    onClick={this.props.selectedBookHandler}
                >View Details</Button>
                <Button
                    className='mx-2 mt-4'
                    color='danger'
                    onClick={this.confirmDelet}
                >Delete </Button>
            </div>
        )
    }
}
export default Book;

