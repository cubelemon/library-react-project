import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/UI/Rating";
import BookPrice from "../components/UI/BookPrice";
import Book from "../components/UI/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  //the + converts the string to a number
  const [ added, setAdded] = useState(false)

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistOnCart() {
    return cart.find(book => +book.id === +id);
  }
  //react cant read this??

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <BookPrice
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae corporis optio officiis beatae, corrupti iure ex sit?
                    Praesentium quod, illo corporis nostrum vitae debitis, quia
                    quo, magni provident blanditiis hic?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae corporis optio officiis beatae, corrupti iure ex sit?
                    Praesentium quod, illo corporis nostrum vitae debitis, quia
                    quo, magni provident blanditiis hic?
                  </p>
                </div>
                {bookExistOnCart() ? (
                    <Link to={`/cart`}><button className="btn">Checkout</button> </Link>
                ): (
                    <button className="btn" onClick={() => addBookToCart(book)}>
                  Add to Cart
                </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
