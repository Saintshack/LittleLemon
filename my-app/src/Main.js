import React from "react" 
import AnotherPhoto from './AnotherPhoto.png'
import Cart from './Cart'
import ReserveATable from './ReserveATable'
import Menu from './Menu'
import {Routes, Route} from 'react-router-dom';

function Main(){
    return(
      <React.Component>
        <main>
      <Routes>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reserveatable" element={<ReserveATable/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
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
        </React.Component>
    )


}

export default Main