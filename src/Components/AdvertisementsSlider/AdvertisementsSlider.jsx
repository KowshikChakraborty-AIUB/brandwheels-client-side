import PropTypes from 'prop-types';

const AdvertisementsSlider = ({ advertisement }) => {

    const { advertisementsImage1, advertisementsImage2, advertisementsImage3 } = advertisement;

    return (
        <div>
            <div className="flex justify-center">
                <div className="carousel w-4/5">
                    <div id="item1" className="carousel-item w-full">
                        <img src={advertisementsImage1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={advertisementsImage2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={advertisementsImage3} className="w-full" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-lg">1</a>
                <a href="#item2" className="btn btn-lg">2</a>
                <a href="#item3" className="btn btn-lg">3</a>
            </div>
        </div>
    );
};

AdvertisementsSlider.propTypes = {
    advertisement : PropTypes.object.isRequired
}

export default AdvertisementsSlider;