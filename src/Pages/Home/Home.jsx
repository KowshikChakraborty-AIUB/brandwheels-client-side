import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Home = () => {

    const brands = useLoaderData();


    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className="mt-12">
                <div>
                    <h2 className="text-5xl font-bold text-center">Check Out Our Products of Renowned Brand</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {
                        brands.map(brand => <Brands key={brand._id} brands={brand}></Brands>)
                    }
                </div>
            </div>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;