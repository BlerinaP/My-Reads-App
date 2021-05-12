import React from 'react';
import {Link} from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI';
import PropTypes from "prop-types";

class Search extends React.Component{
    static propTypes = {
        changeShelf: PropTypes.func.isRequired
    }

    state = {
        searchRes: [],
        query: '',
        notFound: false
    }

    bookSearch = (e) => {
        const query = e.target.value;
        this.setState({query})

        if(query.length > 0){
            BooksAPI.search(query.trim(), 20).then(res => {
                res.length > 0 ?  this.setState({searchRes: res, notFound: false}) :  this.setState({searchRes: [], notFound: true})

            })
        } else {
            this.setState({searchRes: [], notFound: false})
        }
    }
    render(){
        if(this.state.searchRes === undefined){
            return <h1>Loading...</h1>
        }
        const {query,  searchRes} = this.state
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(e) => this.bookSearch(e)}
                            value={query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchRes.map(book => {
                            return <Book key={book.id} book={book} books={this.props.books} changeShelf={this.props.changeShelf}/>
                        })}
                    </ol>
                </div>
                {this.state.notFound === true ? <h1>{'Sorry we dont have this book'}</h1> : ''}
            </div>
        )
    }
}
export default Search
