import { Link } from "react-router-dom"

const Navbar = (props) => {

    const listItems = [
        "Company", "TOS", "Liability", "App", "Support", "Test"
    ]

    return (
        <div id="Navbar">
            {/* <img src={props.imgUrl} id="NavbarImg" alt="" /> */}
            <ul>
                {listItems.map((elem) => 
                    <li key={elem}>{elem}</li> 
                )}
                <Link to="/"><li>Page One</li></Link>
                <Link to="/two"><li>Page Two</li></Link>
                <Link to="/products"><li>Products</li></Link>
            </ul>
        </div>
    )
}

export default Navbar