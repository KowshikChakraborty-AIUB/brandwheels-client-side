import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandsSingleProduct from "../../Components/BrandsSingleProduct/BrandsSingleProduct";
import AdvertisementsSlider from "../../Components/AdvertisementsSlider/AdvertisementsSlider";

const BrandsProducts = () => {

    const [products, setProducts] = useState([]);
    const [advertisements, setAdvertisements] = useState([]);

    const brandsProducts = useLoaderData();
    //console.log(brandsProducts);

    const brandName = useParams();
    //console.log(brandName);

    useEffect(() => {
        const filteredbrandsProducts = brandsProducts.filter(brandProduct => brandProduct.brandName === brandName.brandName)
        setProducts(filteredbrandsProducts);
    }, [brandName, brandsProducts])


    useEffect(() => {
        fetch('https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/advertisements')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                const filteredAdvertisements = data.filter(advertisement => advertisement.brandName === brandName.brandName)
                //console.log(filteredAdvertisements);
                setAdvertisements(filteredAdvertisements)
            })
    }, [brandName.brandName])



    //console.log(products);
    console.log(advertisements);

    // const filteredAdvertisements = advertisements.filter(advertisement => advertisement.brandName === brandName.brandName)

    //console.log();

    // const sp = products.map(product => product.name)
    // console.log(sp);

    return (
        <div>
            {
                products.length === 0 ?
                    <p className="text-5xl font-bold flex justify-center items-center min-h-screen">Sorry, Products Not Available at This Moment.</p>

                    :
                    <div className="mt-12">
                        {
                            advertisements.map(advertisement =>
                                <AdvertisementsSlider key={advertisement._id} advertisement={advertisement}></AdvertisementsSlider>)
                        }
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {
                                products.map(product => <BrandsSingleProduct key={product._id} product={product}></BrandsSingleProduct>)
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default BrandsProducts;