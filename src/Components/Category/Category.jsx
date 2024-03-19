import React from "react";
import { UseGetCategory } from "./services/query/UseGetCategory";
import { Link } from "react-router-dom";

export const Category = () => {

  const { data } = UseGetCategory();

 
  return (
    <div className="grid grid-cols-8 w-[70%] gap-3 containerr pt-10">
      {data?.map((item) => (
        <Link to={`/filter/${item.datakey}`} key={item.id}>
          <img className="w-[80%]  mx-auto" src={item.img} alt="" />
          <h1 className="flex justify-center mt-2">{item.name}</h1>
        </Link>
      ))}
    </div>
  );
};
