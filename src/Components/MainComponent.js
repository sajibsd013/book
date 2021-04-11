import React, { Component } from 'react';
import { NavLink, Route, Switch , Redirect} from 'react-router-dom';
import bookList from '../assets/books';
import BookList from './Lists/BookList';
import NewBook from './Representational/NewBook';
import BookDetail from "./Representational/BookDetail";
class MainComponent extends Component {

    constructor() {
        super();
        this.state = {
            book: bookList,
            selectedBook: null
        }
    }
    selectedBookHandler = book => {
        this.setState({
            selectedBook: book
        })
    }
    render() {

        const books = <BookList
            books={this.state.book}
            selectedBookHandler={this.selectedBookHandler}
        />

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

            </div>
        )
    }
}

export default MainComponent;