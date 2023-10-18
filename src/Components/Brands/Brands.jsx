import PropTypes from 'prop-types';

const Brands = ({ brands }) => {

    const { brandImage, brandName } = brands;


    return (
        <div className="card bg-[#FF5C1D] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={brandImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-black">{brandName}</h2>
            </div>
        </div>
    );
};

Brands.propTypes = {
    brands : PropTypes.object.isRequired
}

export default Brands;