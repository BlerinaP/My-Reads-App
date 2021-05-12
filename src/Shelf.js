import React from 'react';
import { Link } from "react-router-dom";
import EachShelf from "./EachShelf";
import PropTypes from "prop-types";

const Shelf = (props) => {
    const {books , changeShelf} = props
    const shelves = [
        { type: 'currentlyReading', title: 'Currently Reading'},
        { type: 'wantToRead', title: 'Want to Read'},
        { type: 'read', title: 'Read'}
    ]
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {shelves.map((shelf, index) => {
                        const bookShelf = books.filter(book => book.shelf === shelf.type);
                        return(
                            <div className="bookshelf" key={index}>
                                <h2 className="bookshelf-title">{shelf.title}</h2>
                                <div className="bookshelf-books">
                                    <EachShelf changeShelf={changeShelf} books={bookShelf}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"><button className="btn">Add a book</button></Link>
            </div>
        </div>
    )
}
Shelf.prototype = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default Shelf
