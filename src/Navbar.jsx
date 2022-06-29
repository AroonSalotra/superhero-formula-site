import { Link } from "react-router-dom"

const Navbar = (props) => {

    const listItems = [
        "Company", "TOS", "Liability", "App", "Support", "Test"
    ]

    return (
        <div id="Navbar">
            <img src={props.imgUrl} id="NavbarImg" alt="" />
            <ul>
                {listItems.map((elem) => 
                    <li key={elem}>{elem}</li> 
                )}
            <li><Link to="/">Page One</Link></li>
            <li><Link to="/two">Page Two</Link></li>
            </ul>
        </div>
    )
}

export default Navbar