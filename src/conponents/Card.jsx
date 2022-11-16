import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import konu from "../asset/konu.jpg";
import { UpdateUser, useFetch } from "../auth/functions";
import like from "../asset/like.png";
import comment from "../asset/commentn.svg";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const [likethink, setLikeThink] = useState(false);
  const { isLoading , cardList } = useFetch();
  const modalLike = (id) => {
    setLikeThink(!likethink)
    if (likethink) {
      const mod = cardList?.find((product) => product.id === id);
      mod.like += 1;
      UpdateUser(mod);
      
    } else {
      const mod = cardList?.find((product) => product.id === id);
      mod.like -= 1;
      UpdateUser(mod);
      
    }
  };
  return (
    <>
      <div className="rounded-lg shadow-md  max-w-sm w-[350px] relative bg-gray-200 shadow-black mb-12">
        <div className="w-[90%] h-36">
          {item.ImgUrl ? (
            <img
              className="rounded-t-lg w-40 mx-auto"
              src={item.ImgUrl}
              alt=""
            />
          ) : (
            <img className="rounded-t-lg w-48 mx-auto" src={konu} alt="" />
          )}
        </div>
        <div
          className="p-4 mt-12 bg-gray-400 cursor-pointer"
          onClick={() => navigate("/:title", { state: item })}
        >
          <h5 className="text-gray-900 text-xl mb-2 font-bold uppercase">
            {item.Title}
          </h5>
          <p className="text-gray-700 text-[12px] mb-4 w-[90%]  overflow-hidden text-ellipsis">
            {item.history}
          </p>
          <p className="text-gray-700 text-base mb-4 w-[90%] text-ellipsis overflow-hidden">
            {item.content}
          </p>
        </div>
        <div className="flex justify-start gap-2 items-center mt-2 ml-4">
          <svg width="32" height="32" viewBox="0 0 256 256">
            <path
              fill="currentColor"
              d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
              className="block"
            />
          </svg>
          <p className="text-gray-700 text-lg text-ellipsis overflow-hidden font-bold ">
            {item.email}
          </p>
        </div>

        <div className="flex justify-start items-center gap-8 ml-4 mt-2">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img
              src={like}
              alt=""
              onClick={() => modalLike(item.id)}
              className="w-10"
            />
            <p className="text-lg font-bold text-red-400">{item.like}</p>
          </div>
          <img src={comment} alt="" className="w-10" />
        </div>
      </div>
    </>
  );
};

export default Card;
