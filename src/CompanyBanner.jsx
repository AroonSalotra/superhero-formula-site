const CompanyBanner = (props) => {
    return (
        <div className="banner" style={{color: "white"}}>
            {/* <img src="https://via.placeholder.com/2048x400" id="bannerImg" alt="" /> */}
            <div id="bannerImg"></div>

            <div id="bannerContainer">

            <img id="bannerImg-2" src="https://images.unsplash.com/photo-1623682687826-fe06bf64e6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
           <div id="bannerText">

            <h2>When Supply meets Demand</h2>
            <p>Here at [CompanyName], we always deliver</p>
            <h3>Get support from [CompanyName]</h3>
            <p>Pricing, Services & Refunds</p>
           </div>
            </div>
        </div>
    )
}
export default CompanyBanner