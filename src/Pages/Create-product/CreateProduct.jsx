import React from "react";
import { useGetDataKeyCategory } from "../../Components/Category/services/query/useGetDataKeyCategory";
import { UseGetCategory } from "../../Components/Category/services/query/UseGetCategory";
import { usePostProduct } from "./services/mutation/usePostProduct";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Buttons/Button";
import { loadState, saveState } from "../../config/storage";
import { toast } from "react-toastify";

export const CreateProduct = () => {
  const token = loadState("user");
  if (!token) {
    window.location.replace("/");
  }
  const { data: category } = UseGetCategory();
  const [params, setParems] = React.useState("");
  const [location, setLocation] = React.useState("");

  const { mutate } = usePostProduct(params, location);

  const { register, handleSubmit, reset } = useForm();
  const changeValue = (e) => {
    setParems(e.target.value);
  };

  const locationChange = (e) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const submit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (data) => {
        reset();
        console.log(data);
        toast("Mahsulot muvafaqqiyatli qo'shildi", {theme: "colored", type: "success"})
      },
      
    });
  };
 

  return (
    <div className="containerr ">
      <h1 className="font-medium text-2xl">E'lon berish</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div className="shadow-md p-5 rounded-md">
          <h1>Bizga e’loningiz haqida gapirib bering</h1>

          <div>
            <label htmlFor="theme" className="text-gray font-medium ">
              Sarlavha kiriting
            </label>
            <input
              id="theme"
              className="w-full bg-wheat rounded-md p-1.5 outline-none mt-1"
              type="text"
              {...register("title", { required: true })}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="category" className="text-gray font-medium ">
              Kategoriya
            </label>
            <select
              {...register("datakey")}
              onChange={changeValue}
              className="w-full p-1.5 bg-wheat rounded-md outline-none mt-1"
              id="category"
            >
              <option selected disabled>
                Bo'limni tanlang
              </option>
              {category?.map((categories) => (
                <option key={categories.id} value={categories.datakey}>
                  {categories.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="shadow-md p-5 mt-10 rounded-md">
          <h1 className="text-xl font-medium">
            Bizga e’loningiz haqida gapirib bering
          </h1>
          <p className="text-gray">
            Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini
            ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz mumkin.
          </p>
          <input
            className=" p-1.5 rounded-md w-full mt-10 text-gray outline-none bg-wheat"
            placeholder="Rasm URL ni kiriting"
            type="text"
            {...register("img", { required: true })}
          />
        </div>
        <div className="shadow-md p-5 mt-10 rounded-md">
          <p className="font-medium text-xl">Tavsif</p>
          <textarea
            {...register("description", { required: true })}
            rows="10"
            placeholder="E’lon haqida batafsil"
            className="w-full  border-black outline-none rounded-md mt-5 p-5 bg-wheat"
          ></textarea>
          <p className="text-gray">Yana kamida 80 ta belgi yozing</p>
        </div>
        <div className="shadow-md p-5 mt-10 rounded-md">
          <h1 className="font-medium text-xl">Narx</h1>
          <input
            className="outline-none w-full mt-2  rounded-md p-1.5 bg-wheat"
            type="number"
            {...register("price", { required: true })}
          />
        </div>
        <div className="shadow-md p-5 mt-10 rounded-md">
          <h1 className="text-xl">Siz bilan bog’lanish uchun</h1>
          <div>
            <label htmlFor="location" className="text-gray">
              Joylashuv
            </label>
            <input
              className="outline-none w-full mt-2  rounded-md p-1.5 bg-wheat"
              {...register("location", {required:true})}
              type="text"
              id="location"
              placeholder="Manzilingizni kiriting"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="name" className="text-gray">
              Ism
            </label>
            <input
              className="outline-none w-full mt-2  rounded-md p-1.5 bg-wheat"
              {...register("firstName")}
              type="text"
              id="name"
              defaultValue={token?.user.firstName}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-gray">
              Email-manzil
            </label>
            <input
              className="outline-none w-full mt-2  rounded-md p-1.5 bg-wheat"
              disabled
              {...register("email")}
              type="email"
              id="email"
              defaultValue={token?.user.email}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phone" className="text-gray">
              Telefon raqami
            </label>
            <input
              className="outline-none w-full mt-2  rounded-md p-1.5 bg-wheat"
              {...register("phoneNumber", { required: true })}
              type="tel"
              id="phone"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 mb-5">
          <Button  type="submit" variant="dark">E'lon joylash</Button>
        </div>
      </form>
    </div>
  );
};
