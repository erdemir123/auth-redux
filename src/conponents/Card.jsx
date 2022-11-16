import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import konu from "../asset/konu.jpg"
import { UpdateUser, useFetch } from '../auth/functions'

const Card = ({item}) => {
  const navigate =useNavigate()
  const { isLoading, cardList } = useFetch()
  const modalLike =(id)=>{
   const mod = cardList?.find((product)=> product.id === id)
  mod.like+=1
  console.log(mod)
  UpdateUser(mod)
  }
  return (
    // onClick={()=>navigate(`/${item?.Title}`,{state:item})}
    <>
      {
        <div className="rounded-lg shadow-md  max-w-sm w-[350px] h-[450px] relative bg-gray-200 shadow-black mb-12" >
            <div className='w-[90%] h-36'>
            {item.ImgUrl ? (<img className="rounded-t-lg w-40 mx-auto" src={item.ImgUrl} alt="" />) : (<img className="rounded-t-lg w-48 mx-auto" src={konu} alt="" />)}
            </div>
          <div className="p-4 mt-12 bg-gray-400">
            <h5 className="text-gray-900 text-xl mb-2 font-bold uppercase">{item.Title}</h5>
            <p className="text-gray-700 text-[12px] mb-4 w-[90%]  overflow-hidden text-ellipsis">
              {item.history}
            </p>
            <p className="text-gray-700 text-base mb-4 w-[90%] text-ellipsis overflow-hidden">
              {item.content}
            </p>
            </div>
            <div className='flex justify-start gap-2 items-center mt-2 ml-4'>
            <svg width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z" className='block'/></svg>
            <p className="text-gray-700 text-lg text-ellipsis overflow-hidden font-bold ">
              {item.email}
            </p>
            </div>
       
          
          <div className='ml-4 flex gap-4 mt-4'><svg width="32" height="32" viewBox="0 0 36 36"><path fill="red" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21ZM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29Z" className="clr-i-outline clr-i-outline-path-1" onClick={()=>modalLike(item.id)}/><path fill="none" d="M0 0h36v36H0z" /></svg>
          <svg width="32" height="32" viewBox="0 0 24 24"><path fill="gray" d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4l-.01-18z"/></svg></div>
          <p>{item.like}</p>
        </div>
      }
</>
  )
}

export default Card
