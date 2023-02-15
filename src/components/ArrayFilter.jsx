import products from "./Products";


const ArrayFilter = () => {


    return <div className="text-center">
        {
            <p> The items on sale are: </p>
        }

        {
         products.filter( item => item.onSale != false).map(({id, name, price}) => <li key={id}>The {name} and it costs ${price}</li>) 
        }

    </div>
}

export default ArrayFilter;