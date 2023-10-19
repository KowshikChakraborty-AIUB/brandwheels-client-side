import { useLoaderData } from "react-router-dom";

const MyCart = () => {

    const myCart = useLoaderData();

    console.log(myCart);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {
                myCart.map(cart =>

                    <div key={cart._id} className="card bg-base-100 shadow-xl">
                        <figure><img src={cart.imageURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {cart.name}
                                <div className="badge badge-secondary bg-[#FF5C1D]">{cart.brandName}</div>
                            </h2>
                            <p className="font-bold">Type: {cart.type}</p>
                            <p className="font-bold">Price: {cart.price}</p>
                            <p className="font-bold">Rating: {cart.rating}</p>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default MyCart;