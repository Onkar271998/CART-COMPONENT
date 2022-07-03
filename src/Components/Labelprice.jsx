function Labelprice({Label , Price}){

    return(
      <div style={{display:"flex" , marginLeft:"43%"}}>
         
       <div >  <h2>{Label} </h2></div>
         <div style={{marginLeft:"10%"}}><h2>{Price}</h2> </div>

      </div>

    )
}

export default Labelprice;