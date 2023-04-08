
import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
//code here
  let [name, setName] = useState("____");
  let inputName = "";
  const nameInputChange = (e)=>{
    inputName = e.target.value;
  }
  const buttonClicked = ()=>{
    if(inputName) setName(inputName);
    else setName("____");
  }
  return (
    <div id="main">
      <input id='input' onChange={nameInputChange}></input>
      <button id='button' onClick={buttonClicked}>Click</button>
      <p id='text'> Hello my name is {name} and I study at Newton School</p>
    </div>
  )
}


export default App;
