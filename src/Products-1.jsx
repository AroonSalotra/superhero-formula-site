const Products1 = () => {

    const IMAGES = [
        <img src="https://images.unsplash.com/photo-1635166304271-04931640a450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />,
        <img src="https://images.pexels.com/photos/2091316/pexels-photo-2091316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
        <img src="https://images.pexels.com/photos/2280165/pexels-photo-2280165.jpeg?cs=srgb&dl=pexels-carl-newton-2280165.jpg&fm=jpg" alt="" />,
        <img src="https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-999309.jpg&fm=jpg" alt="" />,
        <img src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />,
        <img src="https://images.unsplash.com/photo-1619123707367-bb6647e1a720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />,
        <img src="https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    ]

    const Products = [
        { title: "Featured Products", text: "Browse our wide range", imgUrl: IMAGES[0],  classType: "spanTwo" },
        { title: "Super-Speed v4", text: "No car? no problem!", imgUrl: IMAGES[2] },
        { title: "Fibre-Grower Alpha 1", text: "", imgUrl: IMAGES[3] },
        { title: "Bob's Brain Capacity", text: "", imgUrl: IMAGES[4] },
        { title: "Haptic Reflexors", text: "", imgUrl: IMAGES[5] },
        { title: "Firestarter ", text: "", imgUrl: IMAGES[6], classType: "spanTwo" },
    ]

    return (
        <div className="productsContainer">
            {Products.map(({ title, text, imgUrl, classType }) => (
                <div className={classType ? classType : null}>
                    <h2 className="productsTitle">{title}</h2>
                    <h3 className="productsText">{text}</h3>
                    {imgUrl}
                </div>
            ))}
        </div>
    )
}

export default Products1