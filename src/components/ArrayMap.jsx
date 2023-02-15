import products from "./Products";

const ArrayMap = () => {

    return <div className="product product--info text-center">

        <p> List of products:</p>
        <p> &nbsp; </p>

        {products.map((product) => {
            const {
                name,
            } = product;
            return <div key={`${name}`} className="product--info text-center">
                <div className="product--info-content">
                    <p>{name}</p>
                    <p> &nbsp; </p>
                </div>
            </div>
        })}
    </div>
}

export default ArrayMap;