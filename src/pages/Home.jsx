import React, { useContext, useState } from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Categories'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../Context/UserContext'

function Home() {

  let {cate,setCate} = useContext(dataContext);

   function cateFilter(Categories){
      if(Categories==="All"){
        setCate(food_items)
      }
      else{
            let newList =  food_items.filter((item)=>(item.food_category === Categories));
            setCate(newList);

      }
   }

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
     <Navbar/>

     <div className=' mt-5 flex gap-4 flex-wrap justify-center '>
     { Categories.map((item)=>(
          <div className='flex gap-2 mx-1 p-3 rounded-md shadow-xl bg-white w-30 h-30 justify-center items-center flex-col cursor-pointer hover:bg-green-200 transition-all ' onClick={()=>cateFilter(item.name)}>
              {item.icon}
              {item.name}
            </div>
     ))}

     </div>
    
    <div className='flex flex-wrap justify-center py-8'>
      {cate.map((item)=>(
           <Card name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} />
      ))}
    </div>

    </div>
  )
}

export default Home
