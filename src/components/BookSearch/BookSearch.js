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
        this.storageKey = 'bookData';
        this.state = JSON.parse(localStorage.getItem(this.storageKey)) || defaultState;
    }

    action({value}){
        bookApi(value)
            //pull stuff out of the book that we care about
            .then(res => res.items[0].volumeInfo)
            .then(res => ({
                    title: res.title,
                    subTitle: res.subtitle,
                    img: (res.imageLinks && res.imageLinks.thumbnail) || "",
                    description: res.description
                }))
            .then(res => {
                //Insert our new book data at the beginning of the state list
                this.setState(state => ({
                    books: [res, ...state.books]
                }));
                //store our state in local storage
                localStorage.setItem(this.storageKey, JSON.stringify(this.state))
            })
    }

    render(){
        return(        
            <div>
                <h1>Book Search</h1>
                <Form submitAction={this.action} />

                {
                    //map each book in state to a Tile component
                    this.state.books.map((book, key) => <Tile {...book} key={key} />)
                }

            </div>
        )
    }
}

export default BookSearch;