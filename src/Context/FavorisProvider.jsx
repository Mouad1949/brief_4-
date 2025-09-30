import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const FavorisContext = createContext();

export const FavorisProvider = ({children}) =>{
  const [favoris , setFavoris] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/favoris")
    .then(res => setFavoris(res.data))
    .catch(err => console.error(err))
  },[])

    const AddFavoris = async (oeuvre) =>{
      const exists = favoris.some(item => item.id === oeuvre.id);
      if(exists){
        alert('Cette œuvre est déjà dans vos favoris !')
        return
      }
    try{
      const res = await axios.post("http://localhost:3000/favoris",oeuvre);
      setFavoris((prev) => [...prev ,res.data])
      alert("Ajouter favoris");
    }catch(err){
      console.error(err)
    }
  }

  return(
    <FavorisContext.Provider value={{favoris , AddFavoris, setFavoris}}>
        {children}
    </FavorisContext.Provider>
  );
}