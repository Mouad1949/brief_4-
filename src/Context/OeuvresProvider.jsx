import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const OeuvresContext = createContext();

export const OeuvresProvider = ({ children }) => {
  const [oeuvres, setOeuvres] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/oeuvres")
      .then((res) => setOeuvres(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addOeuvre = async (newOeuvre) =>{
    const res = await axios.post("http://localhost:3000/oeuvres",newOeuvre);
    setOeuvres([...oeuvres , res.data])
  }

  return (
    <OeuvresContext.Provider value={{oeuvres, addOeuvre}}>
      {children}
    </OeuvresContext.Provider>
  );
};
