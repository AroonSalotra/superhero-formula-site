import ProductsData from "./ProductsData"
import { Link } from "react-router-dom"
import ViewProducts from "./ViewProducts"

const Products1 = ({ setIndex, PRODUCTS, IMAGES }) => {
    
    const handleClick = (value) => {
        setIndex(value)
    }

    console.log(IMAGES.length)

    return (
        <div className="productsContainer">
            <div className="spanTwo" id="featured">
                <h1>Enhancers</h1>
                <p>Not responsible for injury and/or death</p>
            </div>
            {PRODUCTS.map(({ title, text, imgUrl, classType, index }) => (
                <Link to="/products" key={title} className={classType ? classType : null}>
                    <div className={classType ? classType : null} key={title}
                        onClick={() => handleClick({ index })}>
                        <h2 className="productsTitle">{title}</h2>
                        <h3 className="productsText">{text}</h3>
                        {imgUrl}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Products1