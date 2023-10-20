import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const MainLayout = () => {

    const [check, setCheck] = useState(false);

    const change = () => {
        setCheck(prevCheck => !prevCheck);
        console.log(check);
    }
    return (
        <>
            {
                check ?
                    <div className="relative" style={{ backgroundColor: 'black', color:'orange'}}>
                        <div className="absolute">
                            <button className="btn ml-0 md:ml-80 mt-20 md:mt-4 bg-[#FF5C1D] hover:bg-[#FF5C1D]" onClick={change}>Dark/Light</button>
                        </div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
                    :
                    <div className="relative">
                        <div className="absolute">
                            <button className="btn ml-0 md:ml-80 mt-20 md:mt-4 bg-[#FF5C1D] hover:bg-[#FF5C1D]" onClick={change}>Dark/Light</button>
                        </div>
                        <Navbar></Navbar>
                        <Outlet></Outlet>
                        <Footer></Footer>
                    </div>
            }
        </>
    );
};

export default MainLayout;