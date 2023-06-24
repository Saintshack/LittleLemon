import React from 'react';
import AnotherPhoto from './AnotherPhoto.png';


function Main() {
  return (
      <main>

        <h1>Little Lemon</h1>

        <p>Chicago</p>

        <img alt="AnotherPhoto" height="200" src={AnotherPhoto} width="350" />

        <article>
          <section>
            <h2>About Little Lemon</h2>

            <p>
              Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
          </section>
        </article>
      </main>
  );
}

export default Main;