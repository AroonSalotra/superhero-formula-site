import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const ViewProducts = ({ index, PRODUCTS, IMAGES, setIndex }) => {

    // console.log(index.index)

    const objectIndex = index.index;
    console.log(objectIndex)

    const ProductText = [
        // null,
        "Tired of high fuel prices? Then the Super-Speed v4 is the one for you!",
        "Now you can open that pickle jar, punch that bully and impress the mirror",
        "Turn your loser kid into a straight A student",
        "The perfect formula for soldiers, now you can commit war crimes while saving on all those ammo costs",
        "Please don't use this for arson"
    ]

    const myProducts = PRODUCTS[index.index]




    let result = []
    const myFunc = (target) => {
        let loopAmount = 3;

        for (let a = 0; a < loopAmount; a++) {
            if (a == objectIndex) {
                a++;
                loopAmount++
            } result.push(target[a])
        } console.log("result", result)
    }


    if (index.index == undefined) {
        return <Link to="/">
            <h1>Error - Press to redirect</h1>
        </Link>
    }

    const handleClick = (value) => {
        setIndex(value)
    }

    return (
        <div className="productsViewContainer" >
            <h1 id="productsViewTitle">{myProducts.title}</h1>
            <div className="productsViewContent">
                {IMAGES[index.index]}
                {/* {IMAGES} */}
                <div id="productsViewText">
                    <p>
                        {/* Placeholder Text */}
                        {ProductText[index.index]}
                    </p>
                </div>
                <button>Apply For Testing Now</button>
            </div>

            <div className="productsViewSuggested">
                <h2>Other Services</h2>
                <div className="productsViewSuggestedImg">
                    {myFunc(PRODUCTS)}
                    {result.map(({ title, imgUrl, index }) => (
                        <div
                            onClick={() => handleClick({ index })}>
                            <h3>{title}</h3>
                            {imgUrl}
                        </div>
                    ))}
                    {/* <img src="https://via.placeholder.com/200x200?text=Image" alt="" />
                    <img src="https://via.placeholder.com/200x200?text=Image" alt="" />
                    <img src="https://via.placeholder.com/200x200?text=Image" alt="" /> */}
                </div>
            </div>
        </div>
    );
}

export default ViewProducts;