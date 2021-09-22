import axios from "axios";
//import { useState, useEffect } from "react";

axios.get('http://localhost:3002/users')
        .then(response => {
            console.log(response);
        });
const ProductList = () => {
    
    return (
        <div>

            <img src="phone1.png" width="150" height="225" />
            <p className="ProductList_heading">heading</p>
        </div>
    );
}

export default ProductList;