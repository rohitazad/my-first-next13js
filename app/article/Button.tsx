'use client'

import { useState } from "react"

const ButtonComponents = ()=>{
    const [clickBtn, setClickBtn] = useState(false)
    return (
        <button onClick={()=>{
            setClickBtn(!clickBtn)
        }}>
            {
                clickBtn ? 'Click the button' : 'Please click again the button'
            }
        </button>
    )
}

export default ButtonComponents;