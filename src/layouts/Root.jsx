import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto px-6 font-poppins">
            <Outlet/>
        </div>
    );
};

export default Root;