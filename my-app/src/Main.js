import React from 'react';
import AnotherPhoto from './AnotherPhoto.png';
import Cart from './Cart';
import ReserveATable from './ReserveATable';
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';

function Main() {
  return (
    <React.Component>
      <main>
        <Routes>
          <Route element={<Menu />} path="/menu" />

          <Route element={<ReserveATable />} path="/reserveatable" />

          <Route element={<Cart />} path="/cart" />
        </Routes>

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
    </React.Component>
  );
}

export default Main;