import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyCart = () => {

    const myCart = useLoaderData();

    const [carts, setCarts] = useState(myCart);

    console.log(myCart);

    const handleRemoveFromCart = (_id) => {
        console.log(_id);
        fetch(`https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/myCarts/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Removed from cart successfully!')
                }

                const remainingCarts = carts.filter(cartRemains => cartRemains._id !== _id);
                setCarts(remainingCarts);
            })
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
                carts.map(cart =>

                    <div key={cart._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={cart.imageURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {cart.name}
                                <div className="badge badge-secondary bg-[#FF5C1D]">{cart.brandName}</div>
                            </h2>
                            <p className="font-bold">Type: {cart.type}</p>
                            <p className="font-bold">Price: ${cart.price}</p>
                            <p className="font-bold">Rating: {cart.rating}</p>
                            <div className="flex justify-center mt-4">
                                <button onClick={() => handleRemoveFromCart(cart._id)} className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D]">Remove</button>
                            </div>
                        </div>
                    </div>

                )
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyCart;