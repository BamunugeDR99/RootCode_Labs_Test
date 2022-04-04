//Testing 222
import React, { useState, useEffect } from "react";

import '../css/cart.css'

export default function Cart(props){

const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     const getCartItems = async () => {

    //         setCartItems(props.data);
           
    //     }
    //    getCartItems();
    // }, [])

    console.log(props.data);

    // props.data.map((item)=> {

    //   console.log(item);
    // })

    //OpenNav Function
    function openNav() {

        // change the width of the sidebar ---> Access the myNav through DOM and manipulate it's style
        document.getElementById("myNav").style.width = "25%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
      }


      // console.log(cartItems);

    return(
        <div>
            
    {/* shopping cart overlay */}
    <div id="myNav" class="overlay">

    {/* javascript:void(0) -- > Makes the browser stays on the same page by returning an undefined result */}
        <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
        <div class="overlay-content">
 

          {props.data.map((item)=>{


                return(
                    <div>

                        <p style={{color: "white"}}>{item.name}</p>
                    </div>
                )


          })}
        </div>
      </div>

     
      <span className="za" onClick={()=>openNav()}>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16"><path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/></svg></span>

        </div>
    )
}