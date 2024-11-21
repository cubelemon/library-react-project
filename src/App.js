import React, { useState, useEffect} from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { books } from "./data";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [cart, setCart] = useState([]);
  //making the cart an array variable


  // FUNCTION WHERE YOU CAN ONLY ADD ONE FROM THE BOOK INFO PAGE 
  function addToCart(book) {


    
      setCart((oldCart) => [...oldCart, {...book, quantity: 1}]);
    
                  //   THIS IS FOR WHEN YOU WANT TO ADD MULTIPLE OF THE SAME BOOK TO CART IN THE BOOK INFO PAGE
                  //const dupeItem = cart.find((item) => +item.id === +book.id);
                  //   //variable for dupe items (when there's a same ietm in cart)
                  //   
                  //    const [cart, setCart] = useState([]);
                  //if (dupeItem) {
                  //     setCart (
                  //       cart.map((item) =>
                  //       {
                  //         if(item.id === dupeItem.id) {
                  //           return {
                  //             ...item, 
                  //             quantity: item.quantity + 1,
                  //           };//if there's a same item in cart and you're adding another one
                  //         }
                  //         else {
                  //           return item;
                  //         }// if there's a same item in cart and you're adding a diff one
                  //       })
                  //     )
                  //   }
                  //   else{
                  //     setCart([...cart, {...book, quantity: 1}]);
                  //   //for the first time they add a book, dupeItem doesn't exist 
                  // }
}

function changeQuantity(book, quantity) {
  setCart(cart.map(item => {
    if (item.id === book.id) {
      return {
        ...item,
        quantity: +quantity,
      }
    }
    else {
      return item
    }
  }))
}

function removeItem(item) {
  setCart(cart.filter(book => book.id !== item.id))
}

  useEffect(
    () =>{
      console.log(cart)
    }, [cart]
  ) 
  //when the cart(its dependency) changes, it will console log it
  //useEffect can only be used in the app function 


  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart = {addToCart} cart={cart} changeQuantity={changeQuantity}/>} /> 
        <Route path="/cart" render={() => <Cart books={books} cart={cart}/>} />
        <Footer />
      </Router>
    </div>
  );

}

export default App;
