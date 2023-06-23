import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <React.Component>
      <div>
        <nav>
          <Link className="nav-item" to="/menu">Menu</Link>

          <Link className="nav-item" to="/reserveatable">Reserve a Table</Link>

          <Link className="nav-item" to="/cart">Cart</Link>
        </nav>
      </div>
    </React.Component>

  );
}

export default Nav;