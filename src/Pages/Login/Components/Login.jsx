import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loadState, saveState } from "../../../config/storage";
import { useLogin } from "../services/mutation/useLogin";
import { Button } from "../../../Components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const Login = () => {
   const token = loadState("user");
   if (token) {
     window.location.replace("/");
   }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();
  const login = (data) => {
    loginMutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        console.log(data);
        reset();
        navigate("/");
      },
    });
  };

  return (
    <div>
      <form className="grid  gap-4 mt-6" onSubmit={handleSubmit(login)}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="text"
            placeholder="Email"
            className="p-1.5 border-black border outline-none rounded-md "
          />
          {errors.email && <p className="text-red">Email xato</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Parol</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
            placeholder="Password"
            className="p-1.5 border-black border outline-none rounded-md "
          />
          {errors.password && (
            <p className="text-red">Parol kamida 6ta belgi bo'lish kerak</p>
          )}
        </div>
        <Button className="text-white mx-auto w-[100%]" variant="dark">
          Kirish
        </Button>
      </form>
    </div>
  );
};
