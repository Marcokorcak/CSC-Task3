import { useState, useEffect } from "react";
import products from "./Products";

const ProductsSort = () => {

    const [newProducts, setNewProducts] = useState([]); //new variable to hold names of sorted products
     
      useEffect(() => {
          sortProducts();  //sort right away
      }, [])
  
      const sortProducts = () => {
   
          products.sort((a, b) => a.price - b.price);  //ascending order
  
        setNewProducts(products.map(a => a.name)) ; //fill with sorted names
  
      }
  
      return <div className="text-center">
        <p> The products sorted by price in ascending order are: </p>
        <p> &nbsp;</p>
        <p>{newProducts.join(',  ')} </p>
          
      </div>
  }
  
  export default ProductsSort;



