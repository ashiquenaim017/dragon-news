import { useLoaderData } from "react-router-dom";
import Header from "../components/Header/Header";
import NavLeft from "../components/NavLeft/NavLeft";
import NavRights from "../components/NavRight/NavRights";
import NewsContainer from "../components/NewsContainer/NewsContainer";
import { useState } from "react";

const Home = () => {
  const news = useLoaderData();
  const [display,setDisplay]=useState(news)
 

  const handleFilterNews=(id)=>{
    if(id===0+'')
    {
      setDisplay(news)
      return;
    }
     const filteredNews=news.filter(singleNews=>singleNews.category_id===id);
     setDisplay(filteredNews)
     console.log(display)
  }
  
  return (
    <div className="mt-4">
      <Header></Header>
      <div className="grid grid-cols-4 gap-4">
        <NavLeft handleFilterNews={handleFilterNews}></NavLeft>
        {/* news container */}
        <div className="col-span-2">
          <h1 className="font-bold text-xl">Dragon News Home</h1>
          {<div>
            <h1>This Category News : {display.length}</h1>
            {
              display.map(singleNews=><NewsContainer key={singleNews._id} singleNews={singleNews}></NewsContainer>)
            } 
            </div>}
        </div>
        <NavRights></NavRights>
      </div>
      
    </div>
  );
};

export default Home;
