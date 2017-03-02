import React from 'react';
import Form from '../Form';
import Tile from '../Tile';
import bookApi from '../../services/bookApi.js';

class BookSearch extends React.Component{

    constructor(props){
        super(props);
        this.action = this.action.bind(this); 
        const defaultState = { books: [] };
        //read initial state from local storage or from a default object
        this.state = JSON.parse(localStorage.getItem('bookData')) || defaultState;
    }

    action({value}){
        bookApi(value)
            .then(res => {
                //Insert our new book data at the beginning of the state list
                this.setState(state => ({
                    books: [res.items[0].volumeInfo, ...state.books]
                }));
                //store our state in local storage
                localStorage.setItem('bookData', JSON.stringify(this.state))
            })
    }

    render(){
        return(        
            <div>
                <h1>Book Search</h1>
                <Form submitAction={this.action} />

                {
                    //map each book in state to a Tile component
                    this.state.books.map((book, key) => (
                        <Tile
                            title={book.title}
                            subTitle={book.subtitle}
                            img={book.imageLinks.thumbnail}
                            key={key}
                         />
                    ))
                }

            </div>
        )
    }
}

export default BookSearch;