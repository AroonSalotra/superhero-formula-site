import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ViewProducts = ({ index, PRODUCTS, IMAGES }) => {

    console.log(index.index)

    const ProductText = [
        // null,
        "Tired of high fuel prices? Then the Super-Speed v4 is the one for you!",
        "Now you can open that pickle jar, punch that bully and impress the mirror",
        "Turn your loser kid into a straight A student",
        "The perfect formula for soldiers, now you can commit war crimes while saving on all those ammo costs",
        "Please don't use this for arson"
    ]

    const myProducts = PRODUCTS[index.index]



    if (index.index == undefined) {
        return <Link to="/">
            <h1>Error - Press to redirect</h1>
        </Link>
    }

    return (
        <div className="productsViewContainer" >
            <h1 id="productsViewTitle">{myProducts.title}</h1>
            <div className="productsViewContent">
                {IMAGES[index.index]}
                <div id="productsViewText">
                    <p>
                        {/* Placeholder Text */}
                        {ProductText[index.index]}
                    </p>
                </div>
                <button>Apply For Testing Now</button>
            </div>

            <div className="productsViewSuggested">
                <h2>Suggested Products</h2>
                <div className="productsViewSuggestedImg">
                <img src="https://via.placeholder.com/200x200?text=Image" alt="" />
                <img src="https://via.placeholder.com/200x200?text=Image" alt="" />
                <img src="https://via.placeholder.com/200x200?text=Image" alt="" />
                </div>
            </div>
        </div>
    );
}

export default ViewProducts;