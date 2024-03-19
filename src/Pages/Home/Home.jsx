import { useState } from "react";
import { Card } from "../../Components/Card/Card";
import { Category } from "../../Components/Category/Category";
import { UseGetCategory } from "../../Components/Category/services/query/UseGetCategory";
import { Search } from "../../Components/Search/Search";
import { Link } from "react-router-dom";
import { useGetAllData } from "./services/query/useGetAllData";
import { useGetPagenation } from "../../Components/Search/services/query/useGetAllPagenation";

export const Home = () => {
  const [page, setPage] = useState(1);
  const { data } = useGetAllData();
  const { data: pagenation } = useGetPagenation(page);
  const buttonPage = Array(pagenation?.pages).fill(null);

  const pagenations = (page) => {
    setPage(page);
  };

  return (
    <div className="">
      <Search />
      <Category />
      <div className="containerr pt-10">
        <h1 className="text-4xl font-medium ">Siz uchun maxsus</h1>

        {!pagenation?.data.length ? (
          <h1 className="text-5xl font-medium text-center mb-20 mt-20">
            Not found
          </h1>
        ) : (
          <div className="grid grid-cols-4 gap-3 mt-10 mb-10 ">
            {pagenation?.data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className="flex justify-center gap-5 mb-10">
          {buttonPage?.map((_, i) => (
            <button
              onClick={() => pagenations(i + 1)}
              className={`border p-2 px-4 border-black rounded-md bg-transparent ${
                page === i + 1
                  ? " text-red border border-red bg-red font-medium text-3xl  "
                  : ""
              } `}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
