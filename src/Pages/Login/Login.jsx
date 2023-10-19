import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Login to Discover Our Products!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D] text-black">Login</button>
                        </div>
                        <p>
                            Don&apos;t have an account?
                            <Link to={'/registration'} className="text-[#FF5C1D] font-bold ml-2">
                                Create an account
                            </Link>
                        </p>
                        <div>
                            <p className="font-bold text-center mt-2">OR</p>
                        </div>
                        <div className="text-center">
                            <p className="text-center text-[#090813] font-bold">Login with</p>
                            <button className="btn w-full bg-[#FF5C1D] hover:bg-[#FF5C1D] my-4 text-black">Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;