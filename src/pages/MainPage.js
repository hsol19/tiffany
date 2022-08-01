import React from 'react'
import './mainpage.css'
import { GrNext,GrPrevious } from "react-icons/gr";

function Mainpage(){
  return(
    <>
      <article id="box01">
   
    <section>
        <h3>The world of beauty</h3>
        <p>Tiffany is the most original in the world for about 200 years  <br/>
            We designed rare and fascinating jewelery</p>
    </section>
  
        <ul>
            <li>상품1</li>
            <li>상품2</li>
            <li> <div>상품3</div></li>
            <li><div>상품4</div></li>
        </ul>
    
        <p id="prev"><GrPrevious/></p>
        <p id="next"><GrNext/></p>
    
        <p className="no">
            <a href="#" className="selected">no01</a>
            <a href="#">no02</a>
            <a href="#">no03</a>
            <a href="#">no04</a></p>
</article>

    <article id="box02">
    <div>
        <h3>WAVE BRACELET</h3>
        <p>Sparkling rows of sapphires, aquamarines and diamonds dynamically twist and ripple around this dazzling platinum design. Custom-cut sapphires, carat total weight 95.44; custom-cut aquamarines, carat total weight 65.16; round brilliant diamonds. <br/>
        sapphires aquamarines and diamonds dynamically twist and ripple around this dazzling platinum design. Custom-cut sapphires, carat total weight 95.44; custom-cut aquamarines, carat total weight 65.16; round brilliant diamonds.
        </p>
    </div>
    </article>
    </>
  )
}

export default Mainpage