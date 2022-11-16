import React from 'react'
import { useNavigate } from 'react-router-dom'
import konu from "../asset/konu.jpg"

const Card = ({item}) => {
  const navigate =useNavigate()
  return (
    <>
      {
        <div className="rounded-lg shadow-lg bg-white max-w-sm w-[350px] h-[350px]">
            <div className='w-[90%] h-36'>
            {item.ImgUrl ? (<img className="rounded-t-lg w-48 mx-auto" src={item.ImgUrl} alt="" />) : (<img className="rounded-t-lg w-48 mx-auto" src={konu} alt="" />)}
            </div>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{item.Title}</h5>
            <p className="text-gray-700 text-base mb-4 w-[90%] text-ellipsis overflow-hidden">
              {item.content}
            </p>
            <p className="text-gray-700 text-base mb-4 w-[90%] text-ellipsis overflow-hidden">
              {item.history}
            </p>
            <p className="text-gray-700 text-base mb-4 w-[90%] text-ellipsis overflow-hidden">
              {item.email}
            </p>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>navigate(`/${item?.Title}`,{state:item})}>Button</button>
          </div>
          <div><svg width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M18 32.43a1 1 0 0 1-.61-.21C11.83 27.9 8 24.18 5.32 20.51C1.9 15.82 1.12 11.49 3 7.64c1.34-2.75 5.19-5 9.69-3.69A9.87 9.87 0 0 1 18 7.72a9.87 9.87 0 0 1 5.31-3.77c4.49-1.29 8.35.94 9.69 3.69c1.88 3.85 1.1 8.18-2.32 12.87c-2.68 3.67-6.51 7.39-12.07 11.71a1 1 0 0 1-.61.21ZM10.13 5.58A5.9 5.9 0 0 0 4.8 8.51c-1.55 3.18-.85 6.72 2.14 10.81A57.13 57.13 0 0 0 18 30.16a57.13 57.13 0 0 0 11.06-10.83c3-4.1 3.69-7.64 2.14-10.81c-1-2-4-3.59-7.34-2.65a8 8 0 0 0-4.94 4.2a1 1 0 0 1-1.85 0a7.93 7.93 0 0 0-4.94-4.2a7.31 7.31 0 0 0-2-.29Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg></div>
        </div>
      }
</>
  )
}

export default Card
