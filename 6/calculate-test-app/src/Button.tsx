import React from "react";

interface Props{
    title:string,
    func: () => void,
    disable:boolean
    className?: string,
    
}

const Button:React.FC<Props> = ({title, func, disable, className}) =>{
    return(
        <button onClick={func} disabled={disable} className={className}>
            {title}
        </button>
    );
}

export default Button;