import moment from "moment";
import logo from "../../assets/logo.png"
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="mt-4">
            <div className="space-y-4">
            <div>
            <img className="mx-auto" src={logo}alt="" />
            </div>
            <p className="text-center">Journalism Without Fear or Favour</p>
            <p className="text-center text-xl font-semiboldbold">{moment().format("dddd, MMMM D , YYYY")}</p>
            </div>
            <div className="flex justify-evenly bg-gray-200 p-2 mt-8">
                <button className="text-white bg-red-500 px-4 p-2">Latest</button>
                <Marquee className="mr-3 text-red-500" pauseOnHover="true" speed="100">
                <Link className="mr-6">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-6">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-6">I can be a React component, multiple React components, or just some text.</Link>
                </Marquee>
                
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;