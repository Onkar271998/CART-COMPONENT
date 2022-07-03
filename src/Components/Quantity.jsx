  import Button from "./Button";
function Quantity({Quant,changecount,id}){
      
    
    return(  
      <div Style={{ display:"flex"  }}>
         
       <div><Button  onClick={()=>changecount(id,+1)}  >+</Button></div> 
         <div><h3>{Quant}</h3></div>
         <Button onClick={()=>changecount(id,-1)}  >-</Button> 
        
      </div>

    )
}

export default Quantity;