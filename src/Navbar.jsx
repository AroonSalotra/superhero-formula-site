import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = (props) => {

    const [display, setDisplay] = useState("none")


    const listItems = [
        "Company", "TOS", "Liability", "App", "Support"
    ]

    const handleClick = () => {
        if (display == "none") {
            setDisplay("flex")
        } else {
            setDisplay("none")
        }

        console.log("clicked")
    }

    useEffect(() => {
        window.addEventListener("click", e => {
            if (display == "flex" && !e.target.matches(".mobileIcon")) {
                setDisplay("none")
            }
        })
    })

    return (
        <div id="Navbar">
            <div id="desktopNavbar">
                <ul>
                    {listItems.map((elem) =>
                        <li key={elem}>{elem}</li>
                    )}
                    <Link to="/"><li>Page One</li></Link>
                    <Link to="/two"><li>Page Two</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                </ul>
            </div>

            <i className="mobileIcon fa-solid fa-bars" onClick={() => handleClick()}></i>

            <div id="mobileNavbar" style={{ display: display  }}>
                <ul>
                    {listItems.map((elem) =>
                        <li key={elem} style={{height: "1px"}}> {elem}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar