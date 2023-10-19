import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandsSingleProduct = ({ product }) => {

    const { _id, name, imageURL, brandName, type, price, rating } = product;

    return (
        <div className="card card-compact">
            <figure><img src={imageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="font-bold">Brand: {brandName}</p>
                <p className="font-bold">Type: {type}</p>
                <p className="font-bold">Price: {price}</p>
                <p className="font-bold">Rating: {rating}</p>
                <div className="flex justify-center gap-8">
                    <Link to={`/productDetails/${_id}`}>
                        <button className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D]">Details</button>
                    </Link>
                    <button className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D]">Update</button>
                </div>
            </div>
        </div>
    );
};

BrandsSingleProduct.propTypes = {
    product: PropTypes.object.isRequired
}

export default BrandsSingleProduct;