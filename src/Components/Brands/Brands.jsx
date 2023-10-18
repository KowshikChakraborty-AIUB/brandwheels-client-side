import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brands = ({ brands }) => {

    const { brandImage, brandName } = brands;
    
    return (
        <Link to={`/brandsProducts/${brandName}`}>
            <div className="card bg-[#FF5C1D] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={brandImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

Brands.propTypes = {
    brands: PropTypes.object.isRequired
}

export default Brands;