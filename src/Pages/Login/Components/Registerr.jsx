import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../assets/Icon/Logo";
import { Button } from "../../../Components/Buttons/Button";
import { useRegister } from "../services/mutation/useRegister";
import { saveState } from "../../../config/storage";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const Registerr = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { mutate } = useRegister();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        reset();
        navigate("/");
      },
    });
  };
  return (
    <div>
      <form className="grid  gap-4 mt-6" onSubmit={handleSubmit(submit)}>
        <div className="flex gap-4 justify-center mt-5">
          <div className="flex flex-col w-full">
            <label htmlFor="first">First Name</label>
            <input
              {...register("firstName", { required: true })}
              placeholder="FirstName"
              id="first"
              type="text"
              className="p-1.5 border-black border outline-none rounded-md "
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="last">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              placeholder="LastName"
              id="last"
              type="text"
              className="p-1.5 border-black border outline-none rounded-md "
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            placeholder="Email"
            className="p-1.5 border-black border outline-none rounded-md "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="p-1.5 border-black border outline-none rounded-md "
          />
        </div>
 
        <Button className="text-white mx-auto w-[100%]" variant="dark">
          Ro'yxatdan o'tish
        </Button>
      </form>
    </div>
  );
};
