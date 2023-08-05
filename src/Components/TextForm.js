import React, { useState } from "react";

export default function TexthtmlForm(props) {
    const [text, setText] = useState("Enter your text")

    const handleUpClick = () =>{
        console.log("Handleupclick was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleDownClick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const clearText = () =>{
        setText("")
    }
    const handleOnChange = (event) =>{
        console.log("Onchange handler");
        setText(event.target.value);
    }
    // let styletext = {
    //     width: "80vw"
    // }
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
    <label
        htmlFor="myBox"
        className="htmlForm-label"
    >
       
    </label><br/>
    <textarea
        className="htmlForm-control"
        id="myBox"
         rows="8" //style={styletext}
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor : props.mode==='dark'? '#13466e' : 'white', color : props.mode==='dark'? 'white' : 'black', width: "80vw"}}
        
    ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>To Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleDownClick}>To Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={clearText}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'? 'white' : 'black'}}>
        <h1>Your summary</h1>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text : "Nothing to preview!"}</p>

    </div>
    </>
  );
}
