import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { login, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        login(email, password)
            .then(userCredentials => {
                toast.success('User logged in successfully!')
                console.log(userCredentials.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(userCredentials => {
                toast.success('User logged in successfully!')
                console.log(userCredentials.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Login to Discover Our Products!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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
                            <p className="text-center text-[#090813] font-bold">Sign in with</p>
                            <button onClick={handleGoogleSignIn} className="btn w-full bg-[#FF5C1D] hover:bg-[#FF5C1D] my-4 text-black">Google</button>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;