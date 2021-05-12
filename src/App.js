import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from 'react-router-dom';
import Search from "./Search";
import Shelf from "./Shelf"
import * as BooksAPI from './BooksAPI';
class BooksApp extends React.Component {
  state = {
    allBooks: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  componentDidMount() {
    BooksAPI.getAll().then(res => {
      this.setState({
        allBooks: res
      })
    })
  }

  changeShelf = (book, changedShelf) => {
      BooksAPI.update(book, changedShelf).then(response => {
          //setting shelf for the new books and for those we edit
          book.shelf = changedShelf;
          //updating state with changed Book
          this.setState(prevState => ({
              allBooks: prevState.allBooks.filter(b => b.id !== book.id).concat(book)
          }))
      })
  }


  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact path="/" render={() => <Shelf books={this.state.allBooks} changeShelf={this.changeShelf}/>}/>
            <Route path="/search" render={() => <Search changeShelf={this.changeShelf} books={this.state.allBooks}/>}/>
          </Switch>
        </div>
    )
  }
}

export default BooksApp
