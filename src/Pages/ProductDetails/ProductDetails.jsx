import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const [productDetailsData, setProductDetailsData] = useState({})

    const productDetailsID = useParams();

    const productDetails = useLoaderData();

    useEffect(() => {
        const particularProduct = productDetails.find(product => product._id === productDetailsID.id);
        setProductDetailsData(particularProduct);
    }, [productDetails, productDetailsID.id])


    const handleAddToCart = () => {
        const name = productDetailsData.name;
        const imageURL = productDetailsData.imageURL;
        const brandName = productDetailsData.brandName;
        const type = productDetailsData.type;
        const price = productDetailsData.price;
        const rating = productDetailsData.rating;

        const addTOCart = { name, imageURL, brandName, type, price, rating }

        console.log(addTOCart);

        fetch('http://localhost:5000/myCarts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addTOCart)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Added to cart successfully! Check your cart list.')
                }
            })
    }


    return (
        <div>
            <h2 className="text-5xl font-bold text-center my-12">{productDetailsData.name}</h2>
            <div className="flex justify-center">
                <img className="w-3/5" src={productDetailsData.imageURL} alt="" />
            </div>
            <p className="text-xl font-bold text-justify flex justify-center">{productDetailsData.shortDescription}</p>
            <div className="flex justify-center">
                <button onClick={handleAddToCart} className="my-12 btn bg-[#FF5C1D] hover:bg-[#FF5C1D]">Add to Cart</button>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;