//Home Component
//Import React Hooks
import React, { useState, useEffect } from "react";

//Import Child Component
import Cart from "./cart";

//Import CSS
import '../css/home.css'

export default function AddStudent(props) {

    //UseState declaration
    let [data, setData] = useState([]);
    let [duplicatedata, setduplicatedata] = useState([]);
    let [cart, setCart] = useState([]);



    //UseEffect Hook to get Product details
    useEffect(() => {
        const getProducts = async () => {

            const response = await fetch("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments");

            console.log(response.clone().json());
            setData(await response.clone().json());
            setduplicatedata(await response.clone().json())

        }
        getProducts();
    }, [])


    //Filter by size fuction
    function filterBySize(size) {

        const updatedItems = duplicatedata.filter((x) => x.details.size === size);
        setData(updatedItems);


    }

    
    //Filter by type fuction
    function fiterbyType(type) {

        const updatedItems = duplicatedata.filter((x) => x.details.type === type);
        setData(updatedItems);

    }

    //Add to Cart Function
    function AddToCart(object) {

        setCart(state => [...state, object]);

    }

    //Return Statement
    return (

        <div>
            <Cart data={cart} />
            <div className="row">
                <div className="col-4">
                    <h3>Sizes</h3>
                </div>

                <div className="col-4">
                    <p>{data.length} Product(s) Found</p>
                </div>

                <div className="order col-4">

                    <span>
                        <p> Order By
                           {/* select by type dropdown */}
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#" onClick={() => fiterbyType("t-shirt")}>t-shirt</a>
                                    <a class="dropdown-item" href="#" onClick={() => fiterbyType("dress shirts")}>dress shirts</a>
                                    <a class="dropdown-item" href="#" onClick={() => fiterbyType("Others")}>Others</a>
                                    <a class="dropdown-item" href="#" onClick={() => setData(duplicatedata)}>All</a>
                                </div>
                            </div>
                        </p>
                    </span>
                </div>

            </div>

            <div className="row1">

                <div className="col1">

                    {/* select by size buttons */}
                    <button type="button" class="btn1 rounded-circle" onClick={() => filterBySize("xsmall")}>XS</button>
                    <button type="button" class="btn1  rounded-circle" onClick={() => filterBySize("small")}>S</button>
                    <button type="button" class="btn1  rounded-circle" onClick={() => filterBySize("medium")}>M</button>
                    <button type="button" class="btn1  rounded-circle" onClick={() => filterBySize("mlarge")}>ML</button>
                    <button type="button" class="btn1  rounded-circle" onClick={() => filterBySize("large")}>L</button>
                    <button type="button" class="btn1 rounded-circle" onClick={() => filterBySize("xlarge")}>XL</button>
                    <button type="button" class="btn1 rounded-circle" onClick={() => filterBySize("xxlarge")}>XXL</button>
                    <button type="button" class="btn1 rounded-circle" onClick={() => setData(duplicatedata)}>ALL</button>

                </div>

                <br />

                <div className="col2">
                    <div className="row">
                        {data.map((product) => {


                            return (
                             
                                <div className="home">
                                    {/* item cards */}

                                    <div className="card">
                                        <div className="container">
                                            <label hidden={!(product.details.tag === "Free Shipping")} class=" btn-sm top-right">Free Shipping</label>
                                            <img src={product.details.image} class="card-img-top" alt={product.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <hr id="hr"></hr>
                                                <p className="card-text">$<b className="price">{product.details.price}</b></p>

                                            </div>
                                        </div>
                                        <button type="button" id="Cart" class="btn btn-lg" onClick={() => AddToCart(product)}>Add to cart</button>
                                    </div>
                                </div>



                            )
                        })}
                    </div>
                </div>




            </div >

        </div>
    );
}