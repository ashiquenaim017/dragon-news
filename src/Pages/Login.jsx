import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar/Navbar";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
const Login = () => {
  const [errorState, setErrorState] = useState("");
  const [success,setSuccess]=useState("")
  const [showPassword, setShowPassword] = useState(false);
  const emailRef=useRef()
  const { logIn, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  //  const from = location.state?.from?.pathname || '/';
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorState("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 6) {
      setErrorState("Password must be more than 6 character");
      return;
    }
    console.log(email);
    console.log(password);
    logIn(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => setErrorState(error.message));
  };
  const handleShowPassword=()=>{
    setShowPassword(!showPassword)
  }
  const handlePasswordReset=()=>{
    setErrorState("")
    setSuccess("")
    const email= emailRef.current.value;
    console.log(email) 
    if(!email)
    {
      setErrorState("Please enter your email for password reset")
      return;
    }
    passwordReset(email)
    .then(()=>{
  setSuccess("Password Reset Link Has Sent To Your Email.")
    })
    .catch(error=>setErrorState(error.message))
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6 pb-4">
            <form onSubmit={handleLoginSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                ref={emailRef}
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute top-14 right-4"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
                <label className="label">
                  <span onClick={handlePasswordReset} className="label-text-alt link link-hover">
                    Forgot password?
                  </span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {<div className="text-red-500">{errorState}</div>}
            {<div className="text-green-500">{success}</div>}
            <p className="text-center">
              Dont Have An Account{" "}
              <Link className="text-blue-400 underline" to={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
