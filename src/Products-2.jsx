const Products2 = () => {
    const IMAGES = [
        <img src="https://images.unsplash.com/photo-1623867821208-c4d8025f8194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    ]

    const Products = [
        { title: "N204", text: "Product Description", id: "img-one", classText:"products2Text", classTitle:"products2Title" },
        { title: "R2XY4", text: "Product Description", id: "img-two", classText:"products2Text", classTitle:"products2Title" },
        { title: "Yen-01", text: "Product Description", id: "img-three", classText:"products2Text", classTitle:"products2Title" }
    ]
    return(
        <div className="products2Container">
            <h1>New Safety Sectors</h1>
            {Products.map(({ title, text, id, classText, classTitle  }) =>
                <div id={id}>
                    <h2 className={classTitle}>{title}</h2>
                    <h3 className={classText}>{text}</h3>
                    {IMAGES}
                </div>
            )}
        </div>
    )
}

export default Products2