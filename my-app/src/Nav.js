import React from "react" 
import {Link} from 'react-router-dom';

function Nav(){
    return(
      <React.Component>
        <div>
        <nav>
        <Link to ="/menu" className="nav-item">Menu</Link>
        <Link to = "/reserveatable" className="nav-item">Reserve a Table</Link>
        <Link to = "/cart" className="nav-item">Cart</Link>
        </nav>
        </div>
      </React.Component>

    )


}

export default Nav