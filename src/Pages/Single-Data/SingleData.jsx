import React, { useState } from "react";
import { useGetSingle } from "./services/query/useGetSingle";
import { useParams } from "react-router-dom";
import { RightArrow } from "../../assets/Icon/RightArrow";
import { DotIcon } from "./../../assets/Icon/DotIcon";
import Map from "../../assets/Img/map.png";
import { Flag } from "../../assets/Icon/Flag";
import Ads from "../../assets/Img/ads.png";
import { useGetUserId } from "./services/query/useGetUserId";
import { loadState } from "../../config/storage";
import { useGetAllData } from "../Home/services/query/useGetAllData";
import { Card } from "../../Components/Card/Card";
import Profile from "../../assets/Img/profilee.webp";
import { Button } from "../../Components/Buttons/Button";
import { useDeleteProduct } from "./services/mutation/useDeleteProduct";
import { Modal } from "../../Components/Modal/Modal";
export const SingleData = () => {
  const token = loadState("user");
  const admin = token?.user?.id;
  const { id } = useParams();
  const { data } = useGetSingle(id);
  const { mutate } = useDeleteProduct(data?.datakey, data?.id);
  const { data: alldata } = useGetAllData();
  const all = alldata?.filter((item) => item.admin == admin);
  const [open, setOpen] = useState(false);
  const deleteProduct = (datakey, id) => {
    mutate(data, {
      onSuccess: () => {
        console.log(data);
      },
    });

    console.log(id);
    console.log(datakey);
  };
  return (
    <div className="containerr pb-10">
      <div className=" 10 flex gap-10">
        <div className="w-[70%]">
          <div className=" ">
            <img
              className="w-full h-[60vh] object-center"
              src={data?.img}
              alt=""
            />
          </div>
          <h1 className="text-2xl font-normal mt-20">{data?.title}</h1>
          <strong className="text-red text-3xl">${data?.price}</strong>

          <div>
            <h1 className="font-semibold text-3xl">Tavsifi</h1>
            <p className="text-lg mt-3">{data?.description}</p>
          </div>
          {admin === data?.admin ? (
            <div className="flex justify-end">
              <Button
                variant="danger"
                className="text-white"
                onClick={() => deleteProduct(data)}
              >
                O'chirish
              </Button>
            </div>
          ) : null}
          <div className="mb-10 border-b border-black mt-10"></div>

          <div className="flex justify-between">
            <span>ID: {data?.id}</span>
            <div className="flex items-center gap-2 cursor-pointer">
              <Flag />
              <span className="text-red"> Shikoyat qilish</span>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between w-full">
            <div>
              <h1 className="text-2xl font-medium">{data?.firstName}</h1>
              <span>Ro’yxatdan o’tgan sanasi 2020</span>
            </div>
            <div className="flex items-center gap-3">
              <strong>xx xxx xx xx</strong>
              <Button
                onClick={() => setOpen(!open)}
                variant="outline"
                className=""
              >
                Ko'rsatish
              </Button>
              <Modal setIsOpen={setOpen} isOpen={open}>
                <div className="p-3 flex flex-col gap-5">
                  <h1 className="text-2xl font-medium">Telefon Raqam</h1>
                  <strong className="text-center">{data?.phoneNumber}</strong>
                </div>
              </Modal>
            </div>
          </div>
          <form className="mt-5">
            <textarea
              className=" rounded-md bg-wheat"
              cols="110"
              rows="10"
            ></textarea>
            <div className="flex justify-end mt-2">
              <Button variant="dark">Yuborish</Button>
            </div>
          </form>
        </div>
        <div className="w-[30%]">
          <div className="shadow-xl rounded-md p-5 flex items-center gap-3">
            <div>
              {!token?.user?.bioImg ? (
                <img
                  className="w-[50px] h-[50px] rounded-full"
                  src={Profile}
                  alt=""
                />
              ) : (
                <img
                  className="w-[50px] h-[50px] rounded-full object-cover"
                  src={token?.user?.bioImg}
                  alt=""
                />
              )}
            </div>
            <div>
              <h1>Foydalanuvchi</h1>
              <p>{data?.firstName} </p>

              <button className="flex items-center gap-2">
                Barcha e'lonlar <RightArrow />
              </button>
            </div>
          </div>
          <div className="shadow-xl rounded-md p-5 mt-5 ">
            <div className="flex items-center gap-5">
              <DotIcon />
              <div className="w-[50%]">
                <p>{data?.location}</p>
              </div>
            </div>
            <img className="mt-3" src={Map} alt="" />
          </div>
          <img src={Ads} alt="" className="mt-5 " />
        </div>
      </div>
      {/* <h1 className="text-3xl font-medium">Muallifning boshqa e'lonlar</h1>
      <div className="grid grid-cols-4 gap-5">
        {admin === data?.admin
          ? all?.map((item) => <Card key={item.id} {...item} />)
          : ""}
      </div> */}
    </div>
  );
};
