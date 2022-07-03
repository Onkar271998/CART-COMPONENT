 import Labelprice from "./Labelprice";
import Quantity from "./Quantity";

function Cartitem({Lable ,Price,Quant,id,handleChange}){

    return(
      <div style={{Display:"flex"}}>
       <Labelprice Label={Lable} Price={Price}/>
       <Quantity id={id}  Quant={Quant} changecount={handleChange}
      />
        
      </div>

    )
}

export default Cartitem;