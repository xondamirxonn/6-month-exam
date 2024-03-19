import React, { useState } from "react";
import { SearchIcon } from "../../assets/Icon/SearchIcon";
import { Dot } from "./../../assets/Icon/Dot";
import { Button } from "../Buttons/Button";
import useDebounce from "../../hook/useDebounce";
import { useGetSearch } from "./services/query/useGetSearch";
import { Link } from "react-router-dom";
import { useGetAllData } from "../../Pages/Home/services/query/useGetAllData";

export const Search = () => {
  const [value, setValue] = useState("");
  const search = useDebounce(value);
  const { data, isPending } = useGetSearch(search);
  const {data: all} = useGetAllData()
  return (
    <div className="container flex justify-center">
      <div className="relative flex items-center ">
        <label htmlFor="search" className="absolute left-2 cursor-pointer">
          <SearchIcon />
        </label>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value.trimStart())}
          id="search"
          className="p-2 rounded-s-md px-10 border border-black outline-none w-[500px]"
          type="text"
          placeholder={`${all?.length} natija bo'yicha `}
        />
        
        <div className="absolute z-10 w-full  top-[100%] ">
          {value.length >= 3 ? (
            isPending ? (
              <div className="bg-white ">
                <div
                  role="status"
                  className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 "
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="w-full   h-[50vh] overflow-auto  ">
                {data?.map((item) => (
                  <Link
                    key={item.id}
                    className="border border-gray flex gap-5 bg-white items-center p-5"
                    onClick={(e) => setValue(e.target.reset())}
                    to={`product/${item.datakey}/${item.id}`}
                  >
                    <img className="w-[15%] h-[50px] object-center rounded-sm" src={item.img} alt="" />
                    <span>{item.title}</span>
                  </Link>
                ))}
                {!data?.length && !isPending && (
                  <div className="w-full bg-white shadow-md p-3 text-center">
                    <h1>Not Found</h1>
                  </div>
                )}
              </div>
            )
          ) : null}
        </div>
      </div>
      <div className="relative flex items-center ">
        <label htmlFor="dot" className="absolute left-2 cursor-pointer">
          <Dot />
        </label>
        <input
          id="dot"
          className="p-2 rounded-e-md px-10 border border-black outline-none w-[500px]"
          type="text"
          placeholder="Butun O'zbekiston"
        />
      </div>
      <Button variant="dark" className="text-white py-1 mx-3">
        Izlash
      </Button>
    </div>
  );
};
