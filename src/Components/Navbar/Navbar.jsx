import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks =

        <>
            <NavLink to={'/'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#FF5C1D] rounded hover:bg-[#FF5C1D] hover:text-black' : ''}><li className="font-bold"><a>Home</a></li></NavLink>
            <NavLink to={'/addProduct'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#FF5C1D] rounded hover:bg-[#FF5C1D] hover:text-black' : ''}><li className="font-bold"><a>Add Product</a></li></NavLink>
            <NavLink to={'/myCart'} className={({ isActive, isPending }) => isPending ? 'Pending' : isActive ? 'bg-[#FF5C1D] rounded hover:bg-[#FF5C1D] hover:text-black' : ''}><li className="font-bold"><a>My Cart</a></li></NavLink>
        </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'}>
                    <div className="flex items-center gap-2">
                        <img className="h-16 rounded-full" src='https://i.ibb.co/1XzBYWC/brand-wheels-logo.jpg' alt="BrandWheels.com" />
                        <a className="normal-case text-xl font-bold"><span className="text-[#FF5C1D]">Brand</span>Wheels.com</a>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'}><a className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D] font-bold">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;