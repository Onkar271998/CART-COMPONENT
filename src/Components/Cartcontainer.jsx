import Cartitem from "./Cartitem";
import Total from "./Total";
  import { useState } from "react";

  const initdata=[
    {
       id:1,
       Lable:"Noodle",
       Price:100,
       Quant:1
    },
    {
        id:2,
        Lable:"fries",
        Price:120,
        Quant:2
     },
     {
        id:3,
        Lable:"idali",
        Price:10,
        Quant:2
     }
  ] 
   
  function CalculateTotal(Product){
       return Product.reduce((acc,c)=> acc+ (c.Quant * c.Price),0)
  }
     
   

   
function Cartcontainer(){   

    const [datas,setInput]=useState(initdata)

   const  handleChange=(id,amount)=>{
      let updated= datas.map(item =>{
        if(item.id === id){
            return{
                ...item,
                Quant: item.Quant + amount
            }
        }
        else{
            return item ;
        }
      })
      setInput(updated)
   }



    return(
      <div>
          
        {  datas.map((item) =>
        <Cartitem 
        key={item.id}
        id={item.id}
         Lable={item.Lable}
          Quant={item.Quant} 
          Price={item.Price}
          
          handleChange={handleChange}/>
          )
        } 

     <Total total={CalculateTotal(datas)} />
        
      </div>

    )
}

export default Cartcontainer;