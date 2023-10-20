import { ToastContainer, toast } from "react-toastify";

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;

        const addNewProduct = { name, imageURL, brandName, type, price, rating, shortDescription };

        console.log(addNewProduct);



        fetch('https://brandshop-server-side-2zj0ix87l-kowshik-chakrabortys-projects.vercel.app/brandsProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                toast.success('Your product is added successfully!');
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Add a Product</h1>
                </div>
                <form onSubmit={handleAddProduct} id="addProduct" className="bg-white shadow-xl px-5 py-5">
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="imageURL" placeholder="URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            {/* <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required /> */}
                            <select name="brandName" form="addProduct">
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
                            <input type="text" name="type" placeholder="Type" className="input input-bordered" required />
                            {/* <select name="type" form="addProduct">
                                <option value="Car">Car</option>
                            </select> */}
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center items-center">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="md:flex gap-6 mt-10 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea rows='50' cols='50' name="shortDescription" placeholder="Short Description" className="input input-bordered" required />
                        </div>
                    </div>
                    <input type="submit" className="mt-10 btn btn-block text-black font-bold bg-[#FF5C1D] hover:bg-[#FF5C1D]" value='Add product' />

                </form>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;