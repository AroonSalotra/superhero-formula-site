const Footer = () => {

    const data = [
        [
            "Account", "Details", "Orders", "Account Recovery"
        ],
        [
            "Legal", "Terms", "Responsibility", "Digital Agreement"
        ],
        [
            "Support", "Products", "Returns", "Garuntee"
        ]
    ]


    return ( 
        <div id="footer">
            <ul>
                {data[0].map((elem) => (
                    <li key={elem}>{elem}</li>
                ))}
            </ul>

            <ul>
                {data[1].map((elem) => (
                    <li key={elem}>{elem}</li>
                ))}
            </ul>

            <ul>
                {data[2].map((elem) => (
                    <li key={elem}>{elem}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default Footer;