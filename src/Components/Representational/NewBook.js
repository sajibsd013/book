import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { ADD_BOOK } from '../../redux/actionType';


const mapDispatchToProps = dispatch => {
    return{
        addBook : (bookName, writer, description) => dispatch({
            type: ADD_BOOK,
            payload: {
                bookName: bookName,
                writer: writer,
                description: description
            }
        })
    }
}
class NewBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addBook(this.state.bookName,this.state.writer,this.state.description);

        this.setState({
            bookName: "",
            writer: "",
            description: ""
        })
    }
    handleReset() {
        this.setState({
            bookName: "",
            writer: "",
            description: ""
        })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='container py-5 d-flex justify-content-center'>
                <div >
                    <h1>New Book Entry</h1>
                    <form onSubmit={this.handleSubmit} onReset={() => this.handleReset()}>
                        <label >Book Name: </label>
                        <br />
                        <Input className="" type="text" name="bookName" onChange={this.handleInputChange} value={this.state.bookName} required/>
                        <br />

                        <label >Writer: </label>
                        <br />
                        <Input type="text" name="writer" onChange={this.handleInputChange} value={this.state.writer} required/>
                        <br />

                        <label >Description </label>
                        <br />
                        <Input type='textarea' name="description" onChange={this.handleInputChange} value={this.state.description} required/>
                        <br />

                        <Button type="submit" color="primary" className='mx-2'>SUBMIT</Button>
                        <Button type="reset" color="primary" className='mx-2'>RESET</Button>

                    </form>
                </div>

            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(NewBook);