import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandsProducts = () => {

    const [products, setProducts] = useState([]);

    const brandsProducts = useLoaderData();
    console.log(brandsProducts);

    const brandName = useParams();
    console.log(brandName);

    useEffect(() => {
        const filtered = brandsProducts.filter(brandProduct => brandProduct.brandName === brandName.brandName)
        setProducts(filtered);
    }, [brandName, brandsProducts])



    console.log(products);

    // const sp = products.map(product => product.name)
    // console.log(sp);

    return (
        <div>
            {
                products.map(product => <li key={product._id}>{product.name}</li>)
            }
        </div>
    );
};

export default BrandsProducts;