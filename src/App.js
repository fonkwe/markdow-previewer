import React from 'react';
import {marked} from 'marked'
import './App.css';
import { useState } from "react"
// import ReactMarkdown from 'react-markdown';


const renderer = new marked.Renderer();

marked.setOptions({
  breaks: true
});


function App() {
  
  const [text, setText] = useState("");
  return (
    <div className="App">
          <h2 className="text-center m-4">Convert Your Markdown</h2>
              <div className="row">
                <div className="col-6">
                    <h6 className="text-center">
                     Enter your markdown Here: </h6>
                    <textarea id="editor" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="col-6" id="previewer">
                    <h6 className="text-center">See the Result: </h6>
                    {/* <ReactMarkdown children={text} className="markdown" /> */}
                    <MarkedConverter markdown={text} />
                    
                </div>
              </div>          
          </div>
      
  );
}


  function MarkedConverter({ markdown }){
    
    return (
      <div>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer })}} />
  
      </div>
    );
  
  } 
 


 


export default App;
