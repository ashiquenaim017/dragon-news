import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const NavRights = () => {
  const {googleSignIn,githubLogin}=useContext(AuthContext);
  const handleGoogleLogin=()=>{
    googleSignIn()
    .then()
      .catch(error=>console.log(error))
   
  }
  const handleGithubLogin=()=>{
    githubLogin()
    .then()
      .catch(error=>console.log(error))
  }
  return (
    <div>
      <h1 className="font-bold mb-6 ml-2">Login With</h1>
      <div className="space-y-2">
        <button onClick={handleGoogleLogin} className="w-full border-2 border-blue-300 text-blue-400 py-2 flex gap-2  items-center justify-center">
          {" "}
          <span>
            <FaGoogle />
          </span>{" "}
          Login With Goggle
        </button>
        <button onClick={handleGithubLogin} className="w-full border-2 border-black py-2 flex gap-2  items-center justify-center">
          {" "}
          <span>
            <FaGithub />
          </span>
          Login With Github
        </button>
      </div>
      <div className="mt-6">
        <h1 className="font-bold mb-6 ml-2">Find Us On</h1>
        <div className="border-2 rounded-lg">
          <a className="flex gap-2 items-center  pl-2 py-3 " href="">
            <span className="text-blue-600">
              <FaFacebookF />
            </span>
            Facebook
          </a>
          <a className="flex gap-2 items-center  pl-2 py-3 border-y-2" href="">
            <span className="text-blue-300">
              <FaTwitter />
            </span>
            Twitter
          </a>
          <a className="flex gap-2 items-center  pl-2 py-3" href="">
            <span className="text-red-400">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>

      <div className="bg-gray-200 mt-6">
        <h1 className="font-bold mb-6 ml-2">Q Zone</h1>
        <div className="flex gap-6 flex-col">
          <div className="flex justify-center border-2 border-gray-400 border-dashed">
            <img src={qzone1} alt="" />
          </div>
          <div className="flex justify-center border-2 border-gray-400 border-dashed">
            <img src={qzone2} alt="" />
          </div>
          <div className="flex justify-center border-2 border-gray-400 border-dashed">
            <img src={qzone3} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NavRights;
