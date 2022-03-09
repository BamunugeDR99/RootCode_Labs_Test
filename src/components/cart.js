import React, { useState, useEffect } from "react";

import '../css/cart.css'

export default function Cart(){


    function openNav() {
        // change the width of the sidebar
        document.getElementById("myNav").style.width = "25%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }


    return(
        <div>
            
    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
        <div class="overlay-content">

        
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
          <a href="#">Item 4</a>
        </div>
      </div>

     
      <span className="za" onClick={()=>openNav()}>  <i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</span>

        </div>
    )
}