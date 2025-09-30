import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CategorieContext = createContext();

export const CategorieProvider = ({children}) =>{

  const [categories , setCategorie] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/categories")
    .then(res => setCategorie(res.data))
    .catch(err => console.error(err))
  },[])

  return(
    <CategorieContext.Provider value={{categories}}>
      {children}
    </CategorieContext.Provider>
  )
}