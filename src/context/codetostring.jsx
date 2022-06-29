import React from 'react'
import "../style.css"
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

 
const Components = ( {value,language} ) => {
    
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
    {value}
  </SyntaxHighlighter>

//     <SyntaxHighlighter language={language ?? null } style={ docco}}>
//     {value}
//   </SyntaxHighlighter>
    )
} 

export default Components