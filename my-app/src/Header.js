import React from "react" 
import Photo from './Photo.jpg';


function Header(){
    return(
      <header>
      <img src = {Photo} width = "50" height = "50" alt="Photo"></img>
      </header>
    )


}

export default Header