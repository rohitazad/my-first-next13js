"use client"


import { useState } from "react";


const ButtonComponents = ()=>{
    const [text, setText] = useState(false)
    return (
        <>
            <button onClick={()=>{setText(!text)}}>
                {
                    text ? 'Please click' : 'Click to button see the magic'
                }
            </button>
        </>
    )
}

export default ButtonComponents;