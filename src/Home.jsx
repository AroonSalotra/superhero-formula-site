import Navbar from "./Navbar";
import Featured from "./Featured";
import Products1 from "./Products-1";
import Products2 from "./Products-2";
import CompanyBanner from "./CompanyBanner";
import Support from "./Support";

const Home = () => {
    return ( 
        <div>
            <Navbar />
            <Featured />
            <Products1 />
            <Products2 />
            <CompanyBanner />
            <Support />
        </div>
     );
}
 
export default Home;