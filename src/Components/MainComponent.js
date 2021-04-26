import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import BookList from './Lists/BookList';
import NewBook from './Representational/NewBook';
import BookDetail from "./Representational/BookDetail";
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DELETE_BOOOK } from '../redux/actionType';


const mapStateToProps = state => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (bookID) => dispatch({
            type: DELETE_BOOOK,
            bookID: bookID
        })
    }
}

class MainComponent extends Component {
    state = {
        selectedBook: null,
        modalOpen: false
    }

    selectedBookHandler = book => {
        this.setState({
            selectedBook: book,
            modalOpen: !this.state.modalOpen
        })
    }

    deleteBookHandler = book => {
        this.props.deleteBook(book.id);
    }


    onModalClose = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {

        const books = <BookList
            books={this.props.books}
            selectedBookHandler={this.selectedBookHandler}
            deleteBookHandler={this.deleteBookHandler}
        />

        let modal = null;
        if (this.state.selectedBook) {
            modal = (
                <div>
                    <Modal isOpen={this.state.modalOpen} >
                        <Link
                            to={"/book/" + this.state.selectedBook.id}
                            style={{ textDecoration: 'none', color: 'Black' }}
                            onClick={this.onModalClose}
                        >

                            <ModalHeader className="text-center justify-content-center">
                                <h4>Book Name : {this.state.selectedBook.bookName}</h4>
                                <h5>Writer : {this.state.selectedBook.writer}</h5>
                            </ModalHeader>
                        </Link>

                        <ModalBody>
                            <p className='text-muted'>{this.state.selectedBook.description}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.onModalClose}>CLOSE</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            )
        }




        return (
            <div className="App">
                <nav className="nav-bar">
                    <ul>
                        <li><NavLink to="/" exact >Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/books" render={() => books} />
                        <Route exact path="/new-book" component={NewBook} />
                        <Route exact path="/book/:id" render={() => <BookDetail book={this.state.selectedBook} />} />
                        <Redirect from="/" to="/books" />
                    </Switch>
                </div>
                {modal}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);