import {Routes, Route, Link} from 'react-router-dom';
import AnotherPhoto from './AnotherPhoto.png'
import Photo from './Photo.jpg';
import React from 'react';
import './App.css';
import Cart from'./Cart'
import Menu from './Menu'
import ReserveATable from './ReserveATable';

function App() {
  return (
    <React.Fragment>
      <header>
      <meta name="description" content="The Little Lemon Website"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="The Little Lemon Website"/>
      <meta name="og:image" content="Little Lemon Logo"/>
      <link rel = "stylesheet" href = "App.css"></link>
      <img src = {Photo} width = "50" height = "50" alt="Photo"></img>
      </header>
      <div>
      <nav className = "Links">
        <Link to ="/menu" className="nav-item">Menu</Link>
        <Link to = "/reserveatable" className="nav-item">Reserve a Table</Link>
        <Link to="/cart" className="nav-item">Cart</Link>
      </nav>
      <Routes>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reserveatable" element={<ReserveATable/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </div>
      <main>
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <img src = {AnotherPhoto} width = "350" height = "200" alt="AnotherPhoto"></img>
        <article>
        <section>
        <h2>About Little Lemon</h2>
        <p>
        Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        </section>
        </article>
      </main>
      <footer>
        <caption>
          Copyright Little Lemon
        </caption>
      </footer>
     
    </React.Fragment>
  );
}

export default App;
