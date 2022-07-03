

function Button({onClick,children,disabled}){

    return(
      <div>
        <button disabled={disabled} onClick={onClick}>    {children}</button> 
       
      </div>

    )
}

export default Button;