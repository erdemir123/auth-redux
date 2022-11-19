import React from "react";
import { useSelector } from "react-redux";

const Comment = ({ item }) => {
  const { user } = useSelector((state) => state.auth);
  function upperItem( str )
  {
      let word = str.split(" ");
      for ( var i = 0; i < word.length; i++ )
      {
          var j = word[i].charAt(0).toUpperCase();
          word[i] = j + word[i].substr(1).toLowerCase();
      }
      return word.join(" ");
  }
  return (
    <div className="bg-slate-500 text-white font-bold  text-xl pl-2 mt-2 flex gap-8 items-center">
      <svg width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 14V6h-5v8l2.5-1.5z" />
        <path
          fill="currentColor"
          d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
        />
      </svg>
      <p>{upperItem(item)}</p>
      <span className="font-thin text-[.7rem] ">Created by ({user.email})</span>
    </div>
  );
};

export default Comment;
