import products from "./Products";

const ArrayMap = () => {
    return <div className="product">
        {products.map((product) => {
            const {
                id,
                name,
                price,
                onSale,
            } = product;
            return <div key={`${id}${name}${price}`} className="product--info text-center">
                <div className="product--info-content">
                    <p> ID of product: {id}</p>
                    <p> Name of product: {name}</p>
                    <p> Price of product: ${price}</p> 
                    <p> &nbsp; </p>
                </div>
            </div>
        })}

    </div>
}

export default ArrayMap;