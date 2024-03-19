import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";

export const Cart = () => {
  const { products } = useSelector((state) => state.product);
  return (
    <div className="containerr pb-10">
      <div className="grid grid-cols-4 gap-5">
        {products?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
