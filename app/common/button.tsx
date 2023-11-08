import React from 'react'

type ButtonProps = {
    text: string;
    className?: string | string[];
    click?: () => void;
}

const DEFAULT_BUTTON_CLASS = "bg-carrot hover:bg-carrot-600"

const Button: React.FC<ButtonProps> = ({ text, className, click }) => {

    let classNameString = className ? (Array.isArray(className) ? className.join(" ") : className ) : DEFAULT_BUTTON_CLASS;

    return (
        <button className={`rounded-none p-5 font-ibm shadow-md shadow-eerie w-full ${classNameString}`}
            onClick={click}>{text}</button>
    )
}

export default Button