import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <div>
        <nav>
          <ul>
          <li><Link to="/menu" className="nav-item">Menu</Link></li>

          <li><Link to="/reserveatable" className="nav-item">Reserve a Table</Link></li>

          <li><Link to="/cart" className="nav-item">Cart</Link></li>
          </ul>
        </nav>
      </div>

  );
}

export default Nav;