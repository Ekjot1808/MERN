import { NavLink, useNavigate } from "react-router";
import loginImage from "../assets/hero.png";
import { UseUser } from "../store/auth";
import { toast } from "react-toastify";

function Login() {

  const {user, setUser} = UseUser();
  const navigate = useNavigate();

    async function handleSumbit(formData) {
        const formInputData = Object.fromEntries(formData);
        console.log(formInputData);

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInputData),
        });

        const data = await response.json();
        if (!response.ok) {
            toast.error(data.message || "Login Failed");
            return;
        }
        setUser(data);
        navigate("/");
        console.log(data);
        toast.success("Login Successful");
    }

  return (
    <section className="min-h-screen px-6 py-20 flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Form */}
        <div className="card bg-base-200 shadow-2xl border border-base-content/10">
          <div className="card-body">

            <h1 className="text-4xl font-bold">
              Welcome <span className="text-primary">Back</span>
            </h1>

            <p className="text-base-content/70 mb-6">
              Login to your account and continue your journey.
            </p>

            <form action={handleSumbit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Email Address
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text">
                    Password
                  </span>
                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-full">
                Login
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center mt-6 text-base-content/70">
              Don't have an account?{" "}
              <NavLink
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Register
              </NavLink>
            </p>

          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:flex justify-center">
          <img
            src={loginImage}
            alt="Login"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Login;