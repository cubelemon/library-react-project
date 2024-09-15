import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookInfo from './Pages/BookInfo';
import { books } from "./data"
import { BrowserRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <div className="App">
        <Router>
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/books" exact render={() => <Books books={books}/>}/>
        <Route path="/books/1" render={() => <BookInfo books={books}/>}/>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
