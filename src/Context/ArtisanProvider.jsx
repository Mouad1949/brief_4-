import axios from "axios";
import { createContext, useEffect, useState } from "react";



export const ArtisanContext = createContext();
export const ArtisanProvider = ({children}) =>{

  const [artisans , setArtisan] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/artisans")
    .then(res => setArtisan(res.data))
    .catch(err => console.error(err))
  },[])

  return(
    <ArtisanContext.Provider value={{artisans}}>
      {children}
    </ArtisanContext.Provider>
  )
}