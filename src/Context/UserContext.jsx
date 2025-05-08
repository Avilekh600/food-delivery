import React, {  createContext, useState } from 'react'
import { food_items } from '../food';

export  const dataContext = createContext()

function UserContext({children}) {
    let [showcart,setShowcart] = useState(false);
    let [cate,setCate] = useState(food_items);
    let [input,setInput] = useState("");
    let [item,setItem] = useState(1);

    let data = {
        input,
        setInput,
        cate,
        setCate,
        showcart,
        setShowcart,
        item,
        setItem
    }

  return (
    <div>
        <dataContext.Provider value={data}> 
                    {children}
        </dataContext.Provider>
    
    </div>
  )
}

export default UserContext
