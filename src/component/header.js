import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai"

function Header(){
  return(
    <div id="wrap">
    <header>
      <div>
     <h1>
      <Link to="/">
        <img src="./main images/logo.png"/>
      </Link>
    </h1>
    <ul>
      <li><a href="#">sign up</a></li>
      <li><a href="#">sign in</a></li>
    </ul>
    </div>

    <p id='btn'>
    <AiOutlineMenu />
    </p>
    </header>
    <nav>
    <h2 className="hide">메인내비게이션</h2>
    <div>
        <ul>
            <li>
                <Link to ="/page01">COLLECTIONS</Link>
            </li>
            <li>
            <Link to ="/page02">Gifts</Link>
            </li>
            <li>
            <Link to ="/page03">Event</Link>
            </li>
           
        </ul>
    </div>
    </nav>
    </div>
    

  )
}

export default Header