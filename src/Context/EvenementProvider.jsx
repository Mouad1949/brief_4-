import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const EvenementContext = createContext()

export const EvenementProvider = ({children}) => {
  const [evenements , setEvenement] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/evenements")
    .then(res => setEvenement(res.data))
    .catch(err => console.error(err))
  },[]);



  return(
    <EvenementContext.Provider value={{evenements}}>
      {children}
    </EvenementContext.Provider>
  )
}