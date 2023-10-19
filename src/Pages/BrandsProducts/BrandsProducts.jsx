import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
        fetch('http://localhost:5000/advertisements')
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
                <p className="font-3xl font-bold">Sorry! Not Available at That Moment!</p>

                :
                    <div>
                        {
                            advertisements.map(advertisement =>
                                <li key={advertisement._id}>
                                    <img className="w-1/2" src={advertisement.advertisementsImage1}></img>
                                    <img className="w-1/2" src={advertisement.advertisementsImage2}></img>
                                    <img className="w-1/2" src={advertisement.advertisementsImage3}></img>
                                </li>)
                        }
                        {
                            products.map(product => <li key={product._id}>{product.name}</li>)
                        }
                    </div>
            }
        </div>
    );
};

export default BrandsProducts;