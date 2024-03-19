import React, { useState } from "react";
import { Logo } from "../../assets/Icon/Logo";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Buttons/Button";
import { useRegister } from "./services/mutation/useRegister";
import { saveState } from "../../config/storage";
import { useLogin } from "./services/mutation/useLogin";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Registerr } from "./Components/Registerr";
import { Login } from "./Components/Login";
export const Auth = () => {
  const [active, setActive] = useState(false);
  const { register, reset, handleSubmit } = useForm();
  const { mutate, isPending } = useRegister();
  const { mutate: loginMutate } = useLogin();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        reset();
        navigate("/");
      },
    });
  };
  const login = (data) => {
    loginMutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        reset();
        navigate("/");
      },
    });
  };
  return (
    <div className="containerr pb-10">
      <div className="shadow-lg p-5  mx-auto w-[450px] ">
        <div className="  border-b-4 border-gray ">
          <NavLink className="pb-[2px] px-[50px]" to={"/auth/register"}>
            Ro'yxatdan o'tish
          </NavLink>
          <NavLink className="pb-[2px]  px-[75.7px]" to={"/auth/login"}>
            Kirish
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
