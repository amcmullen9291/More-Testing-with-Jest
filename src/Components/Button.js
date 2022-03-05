import { useState } from 'react'

function Button() {
    const [ value, setValue ] = useState("Press Here");
 
    const changeButtonText = () => {
        setValue("You Clicked!")
    }
    return (
    <div>
        <button id="button1" onClick={changeButtonText}>{value}</button>
    </div>
  )
}

export default Button
