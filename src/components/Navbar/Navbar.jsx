import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css"
import userImage from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const {user,logOut,photo}=useContext(AuthContext);
   console.log(photo)
     const navigate=useNavigate();
    const navLinks=<>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/about'}>About</NavLink></li>
       <li><NavLink to={'/career'}>Career</NavLink></li>
    </>
    const handleLoginBtn=()=>{
   navigate('/login')
    }
    const handleLogOutBtn=()=>{
     logOut()
     .then(navigate('/login'))
     .catch(error=>console.log(error))
    };
    const handleUpdatePassword=()=>{
     navigate("/update");
    }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLinks
        }
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
  <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={user && photo ? photo :userImage} />
  </div>
</div>
{
  user? <button onClick={handleLogOutBtn} className="px-6 bg-black text-white py-2 rounded-lg">LogOut</button> :<button onClick={handleLoginBtn} className="px-6 bg-black text-white py-2 rounded-lg">Login</button>
}
{
  user &&  <button className="px-6 bg-black text-white py-2 rounded-lg" onClick={handleUpdatePassword}>Change Password</button>
}
    
  </div>
</div>
    );
};

export default Navbar;