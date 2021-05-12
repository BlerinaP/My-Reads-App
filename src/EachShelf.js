import React from 'react';
import Book from "./Book";
import PropTypes from "prop-types";

class EachShelf extends React.Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render(){
        const {changeShelf, books} = this.props

        if(books === null || books === undefined){
            return <h1>Loading...</h1>
        }
        return(
            <ol className="books-grid">
                {books.map(book => {
                    console.log(book)
                    return(
                        <Book book={book} key={book.id} changeShelf={changeShelf} books={books}/>
                    )
                })}
            </ol>
        )
    }
}
export default EachShelf
