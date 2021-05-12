import React from 'react';
import image from '../src/icons/no-image.png'
import SelectShelf from "./SelectShelf";
import PropTypes from "prop-types";

const Book = (props) => {
    if(props.book === undefined){
        return 'Loading'
    }
    let bg = props.book.imageLinks === undefined ? image : props.book.imageLinks.thumbnail
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url(${bg})`}}></div>
                    <SelectShelf book={props.book} books={props.books} changeShelf={props.changeShelf}/>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors === undefined ? '' : props.book.authors.map(author => {
                    return author
                })}</div>
            </div>
        </li>
    )
}
Book.prototype = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default Book
