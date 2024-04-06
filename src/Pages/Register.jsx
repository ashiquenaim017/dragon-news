import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
const pattern= /[A-Z]/
const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [errorState,setErrorState]=useState("")
    const [success,setSuccess]=useState("");
    const [showPassword,setShowPassword]=useState(false)
    const handleRegister=(e)=>{
      e.preventDefault();
      setErrorState("");
      setSuccess("");
      const form= new FormData(e.currentTarget);
      const email=form.get("email");
      const password=form.get("password"); 
      if(password.length<6)
      {
        setErrorState("Password must be more than 6 character")
        return;
      }
      if(!pattern.test(password))
      {
        setErrorState("Please Provide At Least One Uppercase");
        return;
      }
      createUser(email,password)
      .then(()=>{
        setSuccess("User Created Successfully")
        
      })
      .catch(error=>setErrorState(error.message))
      e.currentTarget.reset();
    };
    const handleShowPassword=()=>{
      setShowPassword(!showPassword)
    }
    return (
        <div className="max-w-[50%] max-h-screen mx-auto">
            <Navbar></Navbar>
            <div className="text-center bg-base-200">
  <div >
    <div className="text-center lg:text-left py-3">
      <h1 className="text-3xl font-bold text-center">Register now!</h1>
     
    </div>
    <div className="shadow-2xl bg-base-100 mt-2 pb-4">
      <form onSubmit={handleRegister} className="p-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="Enter Your Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name="photo" type="text" placeholder="Enter Your Photo Url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type={`${showPassword ? "text" : "password"}`} placeholder="Enter Your Password" className="input input-bordered" required />
          <span
                  onClick={handleShowPassword}
                  className="absolute top-14 right-4"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      {
        <div className="text-red-500">
          {errorState}

          </div>
      }
      {
        <div className="text-green-500">
          {success}

          </div>
      }
      <p className="text-center">Already Have An Account? <Link className="text-blue-400 underline" to={'/login'}>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;