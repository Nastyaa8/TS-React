import { IButtonProps } from "../redux tk/types";

const Button = (props:IButtonProps) =>{
    return(
        <button onClick={props.func} className={props.classname}>
            {props.title}
        </button>
    );
};

export default Button;