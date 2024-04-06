import NavRights from "../NavRight/NavRights";
import Header from "../Header/Header";
import {useLoaderData,useParams} from "react-router-dom";

const NewsDetails = () => {
  const news=useLoaderData();
  const {id} =useParams()
  console.log(news)
  const NewsToRead=news.find(singleNews=>singleNews._id===id);
  const {title,image_url,details,}=NewsToRead;

  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-5 px-6">
          <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src={image_url}
              alt=""
              className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500 px-6"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {title}
                </h2>
                <p className="dark:text-gray-800">{details}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NavRights></NavRights>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
