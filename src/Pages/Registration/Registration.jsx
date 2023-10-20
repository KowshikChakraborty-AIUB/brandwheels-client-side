import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Registration = () => {

    const { createUser, userProfile } = useContext(AuthContext);


    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(userName, photoURL, email, password);


        if (password.length < 6) {
            toast.error('Password should have at least 6 characters.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one capital letter.')
            return;
        }
        if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?~]/.test(password)) {
            toast.error('Password should have at least one special character.')
            return;
        }

        createUser(email, password)
            .then(userCredentials => {
                toast.success('Account created successfully!')
                console.log(userCredentials.user);
                e.target.reset();

                userProfile(userCredentials.user, userName, photoURL)
                    .then(() => {
                        console.log('Profile Updated Successfully!');
                    })

            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Create An Account</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="userName" placeholder="user name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Pic URL (Optional)</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="picture URL link" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF5C1D] hover:bg-[#FF5C1D] text-black">Create Account</button>
                        </div>
                        <p className="font-bold">
                            Already have an account?
                            <Link to={'/login'} className="text-[#FF5C1D] font-bold ml-2">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Registration;