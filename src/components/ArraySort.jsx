import { useState, useEffect } from "react";
import products from "./Products";

const ArraySort = () => {

    const [nProducts, setNProducts] = useState([]); 
     
      useEffect(() => {
          sortProds();  
      }, [])
  
      const sortProds = () => {
   
          products.sort((a, b) => a.price - b.price);  
  
        setNProducts(products.map(a => a.name)) ; 
  
      }
      

  
      return <div className="text-center">
        <p> The products sorted by price in ascending order are: </p>
        <p> &nbsp;</p>
        <p>{nProducts.join(',  ')} </p>
          
      </div>
  }
  
  export default ArraySort;



