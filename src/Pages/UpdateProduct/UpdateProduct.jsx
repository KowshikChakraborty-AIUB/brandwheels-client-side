import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateProduct = () => {

    const products = useLoaderData();

    console.log(products);

    const { _id, name, imageURL, brandName, type, price, rating, shortDescription } = products;

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;

        const updateProduct = { name, imageURL, brandName, type, price, rating, shortDescription };



        fetch(`https://brandshop-server-side-p7oz9je8t-kowshik-chakrabortys-projects.vercel.app/brandsProducts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Products updated successfully!')
                }
            })
    }


    return (
        <div className="hero min-h-screen overflow-x-hidden">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mt-10 md:mt-0">
                    <h1 className="text-5xl font-bold text-center">Update a Product</h1>
                </div>
                <form onSubmit={handleUpdateProduct} id="addProduct" className="bg-white shadow-xl px-5 py-5 w-3/4 md:w-full">
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" defaultValue={imageURL} name="imageURL" placeholder="URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            {/* <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required /> */}
                            <select defaultValue={brandName} name="brandName" form="addProduct">
                                <option value="Mercedes-Benz">Mercedes Benz</option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Lamborghini">Lamborghini</option>
                                <option value="Porsche">Porsche</option>
                                <option value="Ferrari">Ferrari</option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            {/* <input type="" name="type" placeholder="Type" className="input input-bordered" required /> */}
                            <select defaultValue={type} name="type" form="addProduct">
                                <option value="Car">Car</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea defaultValue={shortDescription} rows='50' cols='50' name="shortDescription" placeholder="Short Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <input type="submit" className="mt-10 btn btn-block text-black font-bold bg-[#FF5C1D] hover:bg-[#FF5C1D]" value='Update product' />

                </form>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;