import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplaySIngleNews from "./DisplaySIngleNews";

const Category = () => {
  const data = useLoaderData();
  return (
    <div>
      <h4 className="my-4">Dragon News Home</h4>
      <div>
        {data.map(news => (
          <DisplaySIngleNews key={news._id} data={news}></DisplaySIngleNews>
        ))}
      </div>
    </div>
  );
};

export default Category;
