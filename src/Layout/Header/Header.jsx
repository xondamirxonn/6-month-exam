import React, { useState } from "react";
import { Logo } from "../../assets/Icon/Logo";
import { Message } from "../../assets/Icon/Message";
import { Heart } from "./../../assets/Icon/Heart";
import { User } from "./../../assets/Icon/User";
import { Link, useNavigate } from "react-router-dom";
import { loadState } from "../../config/storage";
import { Button } from "../../Components/Buttons/Button";
import { Modal } from "../../Components/Modal/Modal";
import { useSelector } from "react-redux";

export const Header = () => {
  const token = loadState("user");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { count } = useSelector((state) => state.product);
  const ToLogin = () => {
    navigate("/auth/register");
  };
  const OpenModal = () => {
    setIsOpen(!isOpen);
  };
  const LogOut = () => {
    localStorage.removeItem("user");
    setIsOpen(false);
    navigate("/");
  };
  return (
    <div className="fixed w-full bg-white shadow-xl py-3 z-30">
      <div className="containerr flex justify-between">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex  gap-5">
          <div className="flex items-center gap-1 cursor-pointer">
            <Message />
            <span className="">Xabarlar</span>
          </div>
          <Link
            to={"/cart"}
            className="flex items-center gap-1 cursor-pointer relative"
          >
            <Heart />
            <span>Yoqtirganlar</span>
            <span className="absolute bg-red text-white w-[20px] h-[20px] left-2 top-0.5 rounded-full mx-auto justify-center flex items-center">
              {count}
            </span>
          </Link>{" "}
          {token ? (
            <Link
              to={"/profile"}
              className="cursor-pointer flex items-center gap-1"
            >
              <User />
              <span>Akkount</span>
            </Link>
          ) : (
            <div
              onClick={ToLogin}
              className="cursor-pointer flex items-center gap-1"
            >
              <User />
              <span>Akkount</span>
            </div>
          )}
          <select>
            <option value="">Uz</option>
            <option value="">Eng</option>
            <option value="">Ru</option>
          </select>
          {token ? (
            <Button
              onClick={() => navigate("/create-product")}
              className="text-white w-[50%] p-4 py-2"
              variant="dark"
            >
              E'lonlarni joylashtirish
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
