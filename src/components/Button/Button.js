import "./Button.css";

export default function Button({text, ...props}){
    return<>
        <button className={`btn ${props.class}`} type={props.type} onClick={props.onclick}>{text}</button>
    </>
}