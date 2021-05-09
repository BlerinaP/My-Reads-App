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

  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact path="/" component={Shelf}/>
            <Route path="/search" render={() => <Search books={this.state.allBooks}/>}/>
          </Switch>
        </div>
    )
  }
}

export default BooksApp
