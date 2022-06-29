 import './App.css';
import React ,{ useState} from 'react'
import "./style.css";
import ReactMarkdown from 'react-markdown';
import Components from './context/codetostring';
 
function App() {
 
 const [input,setInput]=useState();
  return (
    <> 
     <div className="center">
    <textarea 
    autoFocus
    className='left' 
    value={input} onChange={
      (e)=>setInput(e.target.value ) } />

         <ReactMarkdown children={input} className='right' renderers={{ 
          code:<Components/> ,
          }} />
    </div>
 
    </>
  )
}
 

export default App;
