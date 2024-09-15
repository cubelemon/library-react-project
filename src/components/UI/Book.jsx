import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import Rating from "./Rating"
import BookPrice from './BookPrice'


const Book = ({ book }) => {
  return (
    <div className="book">
    <Link to="/books/1">
      <figure className="book__img--wrapper">
        <img
          src={book.url}
          alt=""
        />
      </figure>
    </Link>
    <div className="book__title">
      <a className="book__title--link">{book.title}</a>
    </div>
    <Rating rating = {book.rating} />
    <BookPrice book={book}/>
  </div>
  );
};

export default Book