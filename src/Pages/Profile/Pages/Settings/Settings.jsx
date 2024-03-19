import React, { useEffect, useState } from "react";
import { RightArrow } from "../../../../assets/Icon/RightArrow";
import { Link, useNavigate } from "react-router-dom";
import Example from "./Components/Disclosure/Disclosure";
import { useForm } from "react-hook-form";
import { HideEye } from "../../../../assets/Icon/HideEye";
import { EyeIcon } from "../../../../assets/Icon/EyeIcon";
// import { useEditProfile } from "../../../Edit-Profile/services/mutation/useEditProfile";
import { loadState, saveState } from "../../../../config/storage";
import { Button } from "../../../../Components/Buttons/Button";
import { useDeleteAcc } from "./services/mutation/useDeleteAcc";
import { Modal } from "../../../../Components/Modal/Modal";
import { toast } from "react-toastify";
import { useEditProfile } from "./services/mutation/useEditProfile";

export const Settings = () => {
  const token = loadState("user");
  const [show, setShow] = useState(false);
  const [logout, setLogout] = useState(false);
  const { mutate } = useEditProfile(token?.user?.id);
  const { mutate: deleteAcc } = useDeleteAcc(token?.user?.id);
  const navigate = useNavigate();
  console.log(token?.id);
  const id = token?.user?.id;
  const { reset, handleSubmit, register } = useForm();
  const editSubmit = (data) => {
    const datas = {
      id: token?.user?.id,
      email: token?.user?.email,
      ...data,
    };
    console.log(datas);
    mutate(datas, {
      onSuccess: (datas) => {
        saveState("user", { user: datas, accessToken: token?.accessToken });
        console.log(datas);
        reset();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const DeleteAccount = (id) => {
    if (confirm("Rostan ham accountni o'chirmoqchimisiz")) {
      deleteAcc(id, {
        onSuccess: () => {
          localStorage.removeItem("user");
          navigate("/auth/register");
        },
      });
    } else {
      toast("O'chirish bekor qilindi")
    }
  };

  const cancel = () => {
    toast("Chiqish bekor qilindi", { theme: "colored", type: "success" });
  };
  const logoutAcc = () => {
    setTimeout(() => {
      localStorage.removeItem("user");
      navigate("/auth/login");
    }, 3_000);
  };

  return (
    <div className="-mt-5 p-5 grid grid-cols-1 gap-5 bg-wheat w-full">
      <Example props={"Profilni tahrirlash"}>
        <div className="mt-20 container mb-10">
          <form
            onSubmit={handleSubmit(editSubmit)}
            className="flex flex-col gap-5 shadow-xl p-5 py-10 rounded-md  mx-auto"
          >
            <input
              type="text"
              {...register("coverImg")}
              className=" w-full p-1.5 bg-wheat outline-none rounded-md "
              placeholder="Rasm URL kiriting:"
              defaultValue={token?.user.coverImg}
            />
            <input
              className=" w-full p-1.5 bg-wheat outline-none rounded-md "
              type="text"
              {...register("bioImg")}
              placeholder="Rasm URL kiriting:"
              defaultValue={token?.user.bioImg}
            />
            <div className="relative flex items-center">
              <input
                className=" w-full p-1.5 bg-wheat outline-none rounded-md "
                type={show ? "text" : "password"}
                placeholder="salom"
                {...register("password")}
              />
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <EyeIcon /> : <HideEye />}
              </span>
            </div>

            <input
              className=" w-full p-1.5 bg-wheat outline-none rounded-md"
              type="text"
              placeholder="salom"
              {...register("firstName", { required: true })}
              defaultValue={token?.user?.firstName}
            />
            <input
              className=" w-full p-1.5 bg-wheat outline-none rounded-md"
              type="text"
              placeholder="salom"
              {...register("lastName", { required: true })}
              defaultValue={token?.user?.lastName}
            />
            <div className="flex justify-end">
              <Button variant="dark">Edit</Button>
            </div>
          </form>
        </div>
      </Example>
      <Example props={"Parolni tahrirlash"}>
        <form>
          <div className="relative flex items-center">
            <input
              className=" w-full p-1.5 bg-wheat outline-none rounded-md "
              type={show ? "text" : "password"}
              placeholder="salom"
              {...register("password")}
            />
            <span
              className="absolute right-2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <EyeIcon /> : <HideEye />}
            </span>
          </div>
          <div className="flex justify-end mt-5">
            <Button variant="dark">Saqlash</Button>
          </div>
        </form>
      </Example>

      <div className="flex justify-end containerr w-full gap-5">
        <Button
          variant="danger"
          className="text-white"
          onClick={() => DeleteAccount(id)}
        >
          Akkountni o'chirish
        </Button>
        <Button variant="outline" onClick={() => setLogout(!logout)}>
          Chiqish
        </Button>
        <Modal isOpen={logout} setIsOpen={setLogout}>
          <h1 className="text-2xl">Akkountdan chiqish</h1>
          <div className="flex gap-5 mt-10 justify-end">
            <Button onClick={logoutAcc} variant="primary" className="">
              Ruxsat berish
            </Button>
            <Button onClick={() => cancel() || setLogout(false)}>
              Rad Etish
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
