import React, { useState } from "react";
import { useGetAllData } from "../../Pages/Home/services/query/useGetAllData";
import { Link } from "react-router-dom";
import { Heart } from "../../assets/Icon/Heart";
import { LikeHeart } from "../../assets/Icon/LikeHeart";
import { add, remove } from "../../redux/reducer/product-reducer";
import { useDispatch, useSelector } from "react-redux";
import { LikeHeart2 } from "../../assets/Icon/LikeHeart2";

export const Card = (props) => {
  // const [like, setLike] = useState(false)
  const { products } = useSelector((state) => state.product);
  const ToggleLike = products.find((item) => item.id == props.id);
  const dispatch = useDispatch();
  const Add = () => {
    dispatch(add(props));
  };

  const Remove = () => {
    dispatch(remove(props));
  };

  return (
    <div className="relative rounded-md shadow-2xl w-full gap-4 min-h-[50vh] flex flex-col  p-2">
      <Link to={`/product/${props.datakey}/${props.id}`} className="">
        <div>
          <img
            className="h-[25vh] w-full object-fill rounded-t-md"
            src={props.img}
            alt=""
          />
        </div>
        <h3 className="text-xl font-normal text-wrap break-words mt">
          {props?.title?.slice(0, 59)}
        </h3>
        <strong className="text-2xl font-medium text-red absolute top-64">
          {props.price == 0 ? "Tekin" : "$" + props.price}
        </strong>
        <p
          className="text-gray font-normal absolute bottom-8"
          title={props.location}
        >
          {props?.location?.length > 30
            ? props.location.slice(0, 30).split(" ").slice(0, -1).join(" ") +
              "..."
            : props.location}
        </p>
      </Link>
      <div className="absolute bottom-2 right-3">
        {!ToggleLike ? (
          <span onClick={() => Add()} className="cursor-pointer">
            <LikeHeart />
          </span>
        ) : (
          <span onClick={() => Remove()} className="cursor-pointer">
            <LikeHeart2 />
          </span>
        )}
      </div>
    </div>
  );
};
