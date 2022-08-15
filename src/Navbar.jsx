import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = (props) => {

    const [display, setDisplay] = useState({display: "none"})


    const listItems = [
        { text: "Home", page: "/superhero-formula-site", id: 1 },
        // { text: "Liability", page: "/liability", id: 4 },
        { text: "Support", page: "/support", id: 5 },
        { text: "Elibility", page: "/elibility", id: 3 },
    ]

    // test.push({ text: "Mobile App", page: "/mobileApp", id: 6 })
    // test.push({ text: "Testing", id: 2, page: "/products" })

    // const handleClick = () => {
    //   (display.display == "none" ? setDisplay({display: "flex"}) : setDisplay({display: "none"}))
    // }

    // useEffect(() => {
    //     window.addEventListener("click", e => {
    //         if (display.display == "flex" && !e.target.matches("#desktopNavbar")) {
    //             setDisplay({display: "none"})
    //         }
    //     })
    // })

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
                    {listItems.map(({ text, page, id }) => (
                        page ? <Link to={page} key={id}><li>{text}</li></Link> : <li key={id}>{text}</li>
                    ))}
                </ul>
            </div>

            <i className="mobileIcon fa-solid fa-bars"></i>
        </div>
    )
}

export default Navbar