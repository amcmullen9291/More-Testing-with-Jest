import { useEffect, useState } from 'react'
import Button from './Button'

function Search() {
const [ inputValue, setInputValue ] = useState();

const handleChange = (e) => {
  setInputValue(e.target.value)
  console.log(e.target.value);
}

  
  return (
      <>
      <center>      
        <div>Search</div>
        <input type="text" onChange={(e) => {handleChange(e)}}  name="textField"/>
      <hr/>
      <br/>
        <Button/>
      </center>

      <div>
        <span>Search term: {inputValue}</span>
      </div>
      </>
  )
}

export default Search