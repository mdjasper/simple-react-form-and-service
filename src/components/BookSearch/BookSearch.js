import React from 'react';
import Form from '../Form';
import Tile from '../Tile';
import bookApi from '../../services/bookApi.js';

class FormView extends React.Component{

    constructor(props){
        super(props);
        this.action = this.action.bind(this); 
        const defaultState = { books: [] };
        this.state = JSON.parse(localStorage.getItem('bookData')) || defaultState;
    }

    action({value}){
        bookApi(value)
            .then(res => {
                
                this.setState(state => ({
                    books: [res.items[0].volumeInfo, ...state.books]
                }));

                localStorage.setItem('bookData', JSON.stringify(this.state))

            })
    }

    render(){
        return(        
            <div>
                <h1>Book Search</h1>
                <Form submitAction={this.action} />

                {
                    this.state.books.map((book, key) => (
                        <Tile
                            title={book.title}
                            img={book.imageLinks.thumbnail}
                            key={key}
                         />
                    ))
                }

            </div>
        )
    }
}

export default FormView;