import AnotherPhoto from './AnotherPhoto.png'
import Photo from './Photo.jpg';
import React,{ReactHTML} from 'react';
import './App.css';

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
      <nav>
        <ul class = "Links">
          <li><a href = "Menu">Menu</a></li>
          <li><a href = "">Reserve a Table</a></li>
          <li><a href = "">Cart</a></li>
        </ul>
      <h1>Little Lemon</h1>
      <p>Chicago</p>
      <img src = {AnotherPhoto} width = "350" height = "200" alt="AnotherPhoto"></img>
      </nav>
      <main>
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
