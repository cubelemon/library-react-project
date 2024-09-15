import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"


const Book = ({ book }) => {
  return (
    <div className="book">
    <Link to="">
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
    <div className="book__ratings">
    {
        new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index}/>)
    }
    {/* an array thats the length of the book rating, then mapping it to the star icons */}
    {
      !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-stroke"/>
    }
    {/* For half stars (non integers)*/}
    </div>
    <div className="book__price">
       {book.salePrice ?
       (<><span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                {book.salePrice.toFixed(2)}</>)
          : (<>${book.originalPrice.toFixed(2)}</>)      
       }
    </div>
  </div>
  );
};

export default Book