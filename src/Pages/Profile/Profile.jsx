import React, { useState } from "react";
import { loadState } from "../../config/storage";
import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import ProfileImg from "../../assets/Img/profilee.webp";
import { Verify } from "./../../assets/Icon/Verify";
import { Button } from "../../Components/Buttons/Button";
import { Modal } from "../../Components/Modal/Modal";
import { EyeIcon } from "../../assets/Icon/EyeIcon";
import { XMarkIcon } from "@heroicons/react/20/solid";
export const Profile = () => {
  const token = loadState("user");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  if (!token) {
    window.location.replace("/");
  }

  const openModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="-my-4 min-h-[80vh]">
      <div className="relative ">
        <div className="">
          {!token?.user?.coverImg ? (
            <div className="w-full bg-gray h-[35vh]"></div>
          ) : (
            <img
              className="w-full bg-gray h-[35vh]  "
              src={token?.user.coverImg}
              alt=""
            />
          )}
        </div>
        <div className=" containerr ">
          <div className="absolute flex items-center gap-3 top-[68%]">
            {!token?.user?.bioImg ? (
              <img
                title={`${token.user.firstName} ${token.user.lastName}`}
                className="w-[120px] h-[120px] rounded-full object-cover "
                src={ProfileImg}
                alt=""
              />
            ) : (
              <div className="bg-white rounded-full p-1  ">
                <img
                  onClick={openModal}
                  title={`${token.user.firstName} ${token.user.lastName}`}
                  className="w-[120px]  h-[120px] rounded-full object-cover cursor-pointer"
                  src={token?.user?.bioImg}
                  alt=""
                />
              </div>
            )}
            <h1 className="text-xl font-medium text-white flex items-center gap-3">
              {token?.user?.firstName} {token?.user?.lastName} <Verify />
            </h1>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} setIsOpen={setModal}>
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-medium mb-4">Profil rasmi</h1>
          <span onClick={closeModal} className="cursor-pointer">
            X
          </span>
        </div>
        <div className="bg-white rounded-full p-1">
          <img
            onClick={openModal}
            title={`${token.user.firstName} ${token.user.lastName}`}
            className="h-[60vh] mx-auto rounded-ful object-cover"
            src={token?.user?.bioImg}
            alt=""
          />
        </div>
      </Modal>
      <div className="containerr pt-32 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium">Xabarlar</h1>
        </div>

        <div className="flex gap-5">
          <div>
            <div className="flex gap-2">
              <p>Sizning hisobingiz: </p>
              <span>0 so'm</span>
            </div>
            <div className="flex gap-2">
              <p>Mavjud bonuslar: </p>
              <span>0 so'm</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Hamyonni to'ldirish</Button>
            <Button variant="outline-black">Paket sotib olish</Button>
          </div>
        </div>
      </div>
      <div className="containerr flex justify-between pt-10">
        <Link to={"/profile"}>E'lonlar</Link>
        <Link to={"/profile/message"}>Xabarlar</Link>
        <Link to={"/profile/payment"}>To'lovlar tarixi</Link>
        <Link to={"/profile/settings"}>Sozlamalar</Link>
        <Link to={"/profile/promo"}>Promokod</Link>
      </div>
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};
