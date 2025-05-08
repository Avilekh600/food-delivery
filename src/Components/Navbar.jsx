import React, { useContext, useEffect } from 'react'
import { MdFoodBank } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsMinecartLoaded } from "react-icons/bs";
import  { dataContext } from '../Context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';


function Navbar() {

  let {input , setInput,setCate, showcart, setShowcart} = useContext(dataContext);

  useEffect(()=>{
     let newlist =  food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input) )

     setCate(newlist)

  },[input])

  let items = useSelector(state => state.cart)
  

  return (
    <div className=' w-full h-[80px] flex justify-around px-5 py-3'>

       <div className='cursor-pointer bg-white h-13 w-13 flex justify-center items-center rounded-md  shadow-xl'>
       <MdFoodBank  className='w-[30px] h-[30px] text-green-600 '/>
       </div>

       <form  className=' rounded-md shadow-xl flex h-12 w-[60%] px-3 gap-2 items-center bg-white' onSubmit={(event)=>event.preventDefault()}>
       <IoSearch  className='text-green-600 w-5' />
       <input type="text" placeholder='search here...' className=' w-full text-xl outline-0' onChange={(event)=>setInput(event.target.value)} value={input}
     />
       </form>

       <div className='bg-white h-13 w-13 px-0.5 flex justify-center items-center shadow-xl relative cursor-pointer' onClick={()=>setShowcart(!showcart)}>
        <span className='absolute text-green-600 top-0 right-0.5 '>{items.length}</span>
       <BsMinecartLoaded className='font-bold w-[30px] h-[30px] text-green-600 rounded-md' />

       </div>


    </div>
  )
}

export default Navbar
