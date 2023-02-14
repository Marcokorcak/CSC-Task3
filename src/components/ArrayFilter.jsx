import products from "./Products";


const ArrayFilter = () => {


    return <div className="text-center">
        {
            <p> The items on sale are: </p>
        }

        {
         products.filter( item => item.onSale != false).map(({id, name}) => <li key={id}>{name}</li>) 
        }
    </div>
}

export default ArrayFilter;