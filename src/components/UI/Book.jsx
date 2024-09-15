import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Book = () => {
  return (
    <div className="book">
    <a href="">
      <figure className="book__img--wrapper">
        <img
          src="https://covers.openlibrary.org/b/id/8091016-L.jpg"
          alt=""
        />
      </figure>
    </a>
    <div className="book__title">
      <a className="book__title--link">Atomic Habits</a>
    </div>
    <div className="book__ratings">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star-half-stroke" />
    </div>
    <div className="book__price">
      <span className="book__price--normal">$15.00</span>
      $10.00
    </div>
  </div>
  )
}

export default Book