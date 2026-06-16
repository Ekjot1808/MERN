import { NavLink } from "react-router";
import registerImage from "../assets/hero.png";
import { UseUser } from "../store/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
    const {user, setUser} = UseUser();
    const navigate = useNavigate();

    async function handleSumbit(formData) {
        const formInputData = Object.fromEntries(formData);
        console.log(formInputData);

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInputData),
        });
        const data = await response.json();
        
        if (!response.ok) {
            toast.error(data.message || "Registration Failed");
            return;
        }

        setUser(data);
        navigate("/");
        toast.success("Registration Successful");
        console.log(data);
    }

    return (
        <section className="min-h-screen px-6 py-20 flex items-center">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Form */}
                <div className="card bg-base-200 shadow-2xl border border-base-content/10">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">
                            Create <span className="text-primary">Account</span>
                        </h1>

                        <p className="text-base-content/70 mb-6">
                            Welcome! Please enter your details.
                        </p>

                        <form action={handleSumbit} className="space-y-5">

                            <div>
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-full mt-3">
                                Create Account
                            </button>
                        </form>

                        <p className="text-center mt-6 text-base-content/70">
                            Already have an account?{" "}
                            <NavLink
                                to="/login"
                                className="text-primary font-semibold hover:underline"
                            >
                                Login
                            </NavLink>
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden lg:flex justify-center">
                    <img
                        src={registerImage}
                        alt="Register"
                        className="max-w-lg w-full"
                    />
                </div>

            </div>
        </section>
    );
}

export default Register;