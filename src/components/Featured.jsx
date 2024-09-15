import React from "react";
import Book from "./UI/Book";
import { books } from "../data";

const Featured = () => {
    console.log()
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books.filter(book => book.rating == 5)
            .slice(0,4)
            .map((book) => (
                <Book />
            ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;