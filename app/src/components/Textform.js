//rfc
import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted into uppercase", "success ");
    }
    
    const handleLoClick = () => { 
        console.log("Lowercase was clicked " + text); 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted into lowercase", "success ");
    }

    const handleClearClick = () => { 
        console.log("Cleared text " + text); 
        setText("");
        props.showAlert("Text is cleared", "success ");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value); 
        //whenever user tries to change on change function will get run and new values will get set 
    }

    const [text, setText] = useState("Enter text");
    //text = " new text "; // wrong
    //setText = "new text"; //correct

    return (
            <div className="container" style={{color: props.mode === "dark" ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* Textarea for user input */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style= {{backgroundColor:props.mode==="dark"?"#042743": "white" , color: props.mode==="dark"? 'white': "#042743"}} id="flox" rows="8"></textarea>
            </div>
            {/* button.btn.btn-primar */} 
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
            {/* Placeholder for the second container's content */}
            <div className=" container my-2 " style={{color: props.mode === "dark" ? 'white' : '#042743'}}>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2> Preview </h2>
            <p> {text.length > 0 ? text : "Write something to preview it"} </p>
            </div>
        </div>
    );
}
