import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const Update = () => {
    const{updatePassWord,logOut}=useContext(AuthContext);
    const [success,setSuccess]=useState("");
    const navigate=useNavigate()
    const handleUpdate=(e)=>{
     e.preventDefault();
     const form= new FormData(e.currentTarget)
     const newPassword=form.get("password");
     updatePassWord(newPassword)
     .then(()=>{
        logOut()
        .then(navigate('/login'))
        .catch(error=>console.log(error))
        setSuccess("Password Updated Successfully")
     })
     .catch()
    }
    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <div className="bg-gray-200 p-10 rounded-xl">
            <h1>Update Your Password</h1>
            <form onSubmit={handleUpdate} className="mt-4" >
                    <label htmlFor="email">Email</label>
                    <input  className="ml-8" type="email" name="email" id="email" />
                    <br /><br />
                    <label htmlFor="password">Password</label>
                    <input className="ml-2" type="password" name="password" id="" />
                    <button type="submit">Change Password</button>
            </form>
            {
                <div className="text-green-500">
                    {success}
                    </div>
            }
            </div>
        </div>
    );
};

export default Update;