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
        <input type="text" data-testid="textFieldTest" onChange={(e) => {handleChange(e)}}  name="textField" id="textField" placeholder='Enter Text'/>
      <hr/>
      <br/>
        <Button/>
      </center>

      <div id="searchTerm">
        <span>Search term: </span><br/>
        <span data-testid="registeredSearch">{inputValue}</span>
      </div>

      </>
  )
}

export default Search