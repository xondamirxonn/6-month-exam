import React from "react";
import { useGetAllData } from "../../../Home/services/query/useGetAllData";
import { loadState } from "../../../../config/storage";
import { Card } from "../../../../Components/Card/Card";
import { Button } from "../../../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";

export const Ad = () => {
  const token = loadState("user");
  const admin = token?.user?.id;
  const navigate = useNavigate()
  const { data } = useGetAllData();
  const userProduct = data?.filter((item) => item.admin === admin);

  const ProductCreate = () => {
    navigate("/create-product")
  }
  return (
    <div className="containerr pt-10 pb-10">
      {!userProduct?.length ? (
        <div className="mb-32 mt-20 grid justify-center ">
          <h1 className="text-5xl text-center font-medium ">
            Mahsulot qo'shmagansiz
          </h1>
          <div className="mx-auto mt-5">
            <Button onClick={ProductCreate} variant="dark">
              Mahsulot qo'shish
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-medium mb-10">Jami e'lonlaringiz: {userProduct?.length}</h1>
          <div className="grid grid-cols-4 gap-5">
            {userProduct?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
