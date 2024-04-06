import axios from "axios";
import {  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; 

const NavLeft = ({handleFilterNews}) => {
 
  const [newsCategory, setNewsCategory] = useState([]);
  useEffect(() => {
    axios.get("categories.json")
    .then(res=>setNewsCategory(res.data))
  }, []);


  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">All Categories</h1>
      {
        <div className="space-y-4">
          { newsCategory.map(singleNewsCategory=><NavLink onClick={()=>handleFilterNews(singleNewsCategory.id)}  className={'block'} key={singleNewsCategory.id}>{singleNewsCategory.name}</NavLink>)}
            </div>
      }
      
    </div>
  );
};
NavLeft.propTypes={
  handleFilterNews: PropTypes.func
}
export default NavLeft;
