import React from 'react'
import { GiChickenOven } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';

function Card({name,image,id,price,type}) {

   let dispatch = useDispatch()
  return (
    <div className='w-60 h-90 p-4 bg-white rounded-md flex flex-col gap-2 m-4 hover:border-2 border-green-400 transition-all shadow-xl'>
          <div className='w-[100%] h-[60%] rounded-md overflow-hidden'>
            <img src={image} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='text-xl font-bold'>
             {name}
          </div>
          <div className='flex justify-between text-green-500'>
            Rs {price}/-
            <div className='flex items-center gap-1'>
              {type==='veg'?  <LuVegan /> : <GiChickenOven />}
            <span>{type}</span>
            </div>
          </div>
          <div>
                <button className='bg-green-200 w-full mt-3 p-2 rounded-md cursor-pointer hover:bg-green-300 transition-all' onClick={()=>dispatch(AddItem({id:id, name:name, price:price,image:image,qty:1}))}>Add to Dish</button>
            </div>
    </div>
  )
}

export default Card
