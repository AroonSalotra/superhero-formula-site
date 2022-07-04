const Products2 = () => {
    // const IMAGES = [
    //     <img src="https://images.unsplash.com/photo-1623867821208-c4d8025f8194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
    // ]

    const imgLink = "https://images.unsplash.com/photo-1623867821208-c4d8025f8194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"



    const Products = [
        { title: "N204", text: "Product Description", id: "img-one", classText:"products2Text", classTitle:"products2Title", img: imgLink },
        { title: "R2XY4", text: "Product Description", id: "img-two", classText:"products2Text", classTitle:"products2Title", img: imgLink },
        { title: "Yen-01", text: "Product Description", id: "img-three", classText:"products2Text", classTitle:"products2Title", img: imgLink }
    ]
    return(
        <div className="products2Container">
            <h1>New Safety Vaccines</h1>
            <div className="products2Content">

            {Products.map(({ title, text, id, classText, classTitle, img  }) =>
                <div key={title} id={id} >
                    <h2 className={classTitle}>{title}</h2>
                    <h3 className={classText}>{text}</h3>
                    <img src={img} alt="" key={id}/>
                </div>
            )}
            </div>
        </div>
    )
}

export default Products2