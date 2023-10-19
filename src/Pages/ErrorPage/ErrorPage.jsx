import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <Link to={'/'}>
            <div className="flex justify-center items-center">
                <img src={'https://i.ibb.co/Hz3PnkD/404-car-design.jpg'} alt="" />
            </div>
        </Link>
    );
};

export default ErrorPage;