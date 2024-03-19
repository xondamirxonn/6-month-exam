import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataKeyCategory } from "../../Components/Category/services/query/useGetDataKeyCategory";
import { Card } from "../../Components/Card/Card";
import { useGetSingle } from "../Single-Data/services/query/useGetSingle";
import { UseGetCategory } from "../../Components/Category/services/query/UseGetCategory";

export const Filter = () => {
  const { datakey } = useParams();

  const { data } = useGetDataKeyCategory(datakey);
  return (
    <div className="containerr pb-10">
      <div className="grid grid-cols-4 gap-4">
        {data?.map((item) => (
            <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
