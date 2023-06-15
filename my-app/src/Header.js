import React from "react" 
import Photo from './Photo.jpg';


function Header(){
    return(
      <React.Component>
      <img src = {Photo} width = "50" height = "50" alt="Photo"></img>
      </React.Component>
    )


}

export default Header