import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleOnChange = (event)=>{
       // console.log("On change");
        setText(event.target.value);
    }
    // Credits: A
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setText] = useState('');
    // text = "new text" // wrong way to change the state
    // setText = "new text" // Correct way to change the state
    
    return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder="Enter your text here ..." value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black' }} >
        <h2>Text Summary</h2>
        <p>Number of words: {text.split(" ").filter((element)=> {return element.length !== 0}).length}</p>
        <p>Number of characters: {text.length}</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
