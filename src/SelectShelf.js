import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SelectShelf extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    changeSh = (e) => {
        this.props.changeShelf(this.props.book, e.target.value)
    }
    render(){
        let shelfSelected = 'none';

        for (let booky of this.props.books){
            if(booky.id === this.props.book.id){
                shelfSelected = booky.shelf;
                break;
            }
        }

        return(
            <div className="book-shelf-changer">
                <select onChange={(e) => this.changeSh(e)} defaultValue={shelfSelected}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default SelectShelf
