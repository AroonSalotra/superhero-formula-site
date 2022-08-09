import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = (props) => {

    const [display, setDisplay] = useState("none")


    const listItems = [
        "Home", "Company", "TOS", "Liability", "App", "Support"
    ]

    const test = [
        { text: "Home", page: "/", id: 1 },
        // { text: "Liability", page: "/liability", id: 4 },
        { text: "Support", page: "/support", id: 5 },
        { text: "Elibility", page: "/elibility", id: 3 },
    ]

    // test.push({ text: "Mobile App", page: "/mobileApp", id: 6 })
    test.push({ text: "Testing", id: 2, page: "/products" })


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
                {/* <ul>
                    {listItems.map((elem) =>
                        <li key={elem}>{elem}</li>
                    )}
                    <Link to="/"><li>Page One</li></Link>
                    <Link to="/products"><li>Products</li></Link>
                </ul> */}

                <ul>
                    {test.map(({ text, page, id }) => (
                        page ? <Link to={page} key={id}><li>{text}</li></Link> : <li key={id}>{text}</li>
                    ))}
                </ul>
            </div>

            <i className="mobileIcon fa-solid fa-bars" onClick={() => handleClick()}></i>

            <div id="mobileNavbar" style={{ display: display }}>
                <ul>
                    {listItems.map((elem) =>
                        <li key={elem} style={{ height: "1px" }}> {elem}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar