import React from "react";
import { useState, useRef } from "react";

interface Props{
    text:[string, React.Dispatch<React.SetStateAction<string>>],
    className?: string,
    id?:string,
    fun?: () => void
}

const Display:React.FC<Props> = ({text, className, id, fun}) =>{
    const uref = useRef<HTMLTextAreaElement | null>(null);
    const setFocus = () =>{
        uref.current?.focus();
    }
    const vvod = (p: React.ChangeEvent<HTMLTextAreaElement>) =>{
        const input = p.target.value;
        if(input[input.length - 1] === '='){
            if(fun){
                fun();
            }
        }
        const checkValid = /^[0-9+\-*/.]*$/.test(input[input.length - 1]);
        if(checkValid || input.length === 0){
            text[1](input);
        }
    }
    return(
        <textarea autoFocus ref={uref} value={text[0]} onChange={vvod} onBlur={setFocus} className={className} id={id}></textarea>
    );
}

export default Display;