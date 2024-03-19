import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../Components/Card/Card";
import { Button } from "../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { products } = useSelector((state) => state.product);
  const navigate = useNavigate("/")
  const Home = () => {
    navigate("/")
  }
  return (
    <div className="containerr pb-10">
      {!products.length ? (
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="text-4xl font-medium">Yoqtirganlarda mahsulot yo'q</h1>
          <Button onClick={Home} variant="dark">Asosiy</Button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {products?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};
