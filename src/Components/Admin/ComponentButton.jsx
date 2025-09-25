import React, { useState } from 'react'

function ComponentButton() {
  const [active,setActive] = useState('Oeuvre');
  const buttons = ['Oeuvre','Catégories','Artisans','Evenement'];
  return (
    <div className='flex justify-baseline '>
      {/* <button className=" bg-[#9B3922] px-6 py-3 font-medium text-white shadow hover:bg-transparent hover:">Ajouter des favoris</button> */}
      
      {
        buttons.map(btn=>(
            <button key={btn}
            onClick={() => setActive(btn)} 
            className={`inline-block mx-4 cursor-pointer rounded px-6 py-3 font-medium shadow border transition
              ${active === btn ? "bg-[#9B3922] text-white border-[#9B3922]" :"text-[#9B3922] border-[#9B3922] hover:bg-[#9B3922] hover:text-white"}`}>{btn}</button>
        ))
      }
      
    </div>
  )
}

export default ComponentButton