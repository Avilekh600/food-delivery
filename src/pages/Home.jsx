import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Categories'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../Context/UserContext'
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux'
import Card2 from '../Components/Card2'
import { toast } from 'react-toastify'


function Home() {

  let {cate,setCate,input,showcart,setShowcart} = useContext(dataContext);

   function cateFilter(Categories){
      if(Categories==="All"){
        setCate(food_items)
      }
      else{
            let newList =  food_items.filter((item)=>(item.food_category === Categories));
            setCate(newList);

      }
   }
   let items = useSelector(state => state.cart)

   let subtotal = items.reduce((total,item)=>total + item.qty*item.price,0)
   let deliveryfee = 20;
   let taxes = subtotal*0.05;
   let total = Math.floor(subtotal + deliveryfee + taxes);
  

  return (
    <div className='bg-slate-200 w-full min-h-screen' >
     <Navbar/>
     
     {!input?
     <div className=' mt-5 flex gap-4 flex-wrap justify-center '>
     { Categories.map((item)=>(
          <div className='flex gap-2 mx-1 p-3 rounded-md shadow-xl bg-white w-30 h-30 justify-center items-center flex-col cursor-pointer hover:bg-green-200 transition-all ' onClick={()=>cateFilter(item.name)}>
              {item.icon}
              {item.name}
            </div>
     ))}
     </div> : null }
      
     <div className='flex flex-wrap justify-center py-8'>
      {
        cate.length>1?cate.map((item)=>(
          <Card name={item.food_name} image={item.food_image} id={item.id} price={item.price} type={item.food_type} />
     )):<div className='text-2xl font-semibold text-green-500'>No Dish Found</div>
      }
      
    </div>
    
    <div className={` overflow-auto cart bg-white w-[100vw] md:w-[40vw] h-full fixed top-0 right-0 p-5 ${showcart? "translate-x-0" : "translate-x-full"} transition-all delay-200`} >
          <header className='flex justify-between text-green-500 font-bold text-xl m-2 shadow-2xl'>
            <span>Order Items</span>
            <span> <ImCross className='cursor-pointer hover:text-green-600' onClick={()=>setShowcart(!showcart)}/> </span>
          </header>
          {
            items.length>0?<>
            <div>
              {items.map((item)=>(
                <Card2 name={item.name} image={item.image} id={item.id} price={item.price}  qty={item.qty} />
              ))}
            </div>
            <div className='border-t-2 border-b-2 w-full border-gray-700 p-6'>
              <div className='flex justify-between'>
                 <span className='text-lg text-gray-800 font-semibold'>Subtotal</span>
                 <span className=' text-lg font-semibold text-green-700'>Rs {subtotal}/-</span>
              </div>
              <div className='flex justify-between mt-2'>
                 <span className='text-lg text-gray-800 font-semibold'>Delivery Fee</span>
                 <span className=' text-lg font-semibold text-green-700'>Rs {deliveryfee}/-</span>
              </div>
              <div className='flex justify-between mt-2'>
                 <span className='text-lg text-gray-800 font-semibold'>Taxes</span>
                 <span className=' text-lg font-semibold text-green-700'>Rs {taxes}/-</span>
              </div>
            </div>
            <div className='flex justify-between mt-2 p-6'>
                 <span className='text-xl text-gray-800 font-semibold'>Total</span>
                 <span className=' text-xl font-semibold text-green-700'>Rs {total}/-</span>
              </div>
              <button className='w-full p-2 bg-green-700 text-lg text-white cursor-pointer rounded-lg hover:bg-green-600' onClick={()=>toast("order placed")}>Place Order</button>
           </>
           :<div className='text-center text-2xl font-semibold text-green-500 mt-2.5'>Empty Cart</div>
          }
          
    </div>
    
    </div>
  )
}

export default Home
