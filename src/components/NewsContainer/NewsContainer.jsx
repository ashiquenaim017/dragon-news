import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsContainer = ({ singleNews }) => {
  
  const { _id,title, rating, total_view, author, image_url, details } = singleNews;

  return (
    <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
     
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <img
            alt=""
            src={author.img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {author.name}
            </a>
            <span className="text-xs dark:text-gray-600">
              {new Date(author.published_date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex text-xl gap-2">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div>
        <h2 className="mb-2 text-xl font-semibold">{title}</h2>
        <img
          src={image_url}
          alt=""
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />

    <p className="text-sm dark:text-gray-600">{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-red-500">Read More</Link></p>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="space-x-2 flex items-center ">
          <div className="flex text-xl text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          </div>
          <div className="mt-1">{rating.number}</div>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <span className="flex gap-2">
            <IoMdEye className="text-xl" /> {total_view}
          </span>
        </div>
      </div>
    </div>
  );
};
NewsContainer.propTypes={
  singleNews: PropTypes.object
}
export default NewsContainer;
