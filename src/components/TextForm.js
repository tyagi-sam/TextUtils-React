import React, {useState} from 'react';


export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log('Uppercase was clicked '+ text);
        let newText= text.toUpperCase();
        setText(newText)
        //props.showAlert('Converted to UpperCase!', 'success');
    }
    const handleLoClick = ()=>{
        console.log('Lowercase was clicked '+ text);
        let newText= text.toLowerCase();
        setText(newText)
        //props.showAlert('Converted to LowerCase!', 'success');
    }
    const handleClear = ()=>{
        console.log('Cleared text');
        let newText= '';
        setText(newText)
       // props.showAlert('Text Cleared!', 'success');
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        //props.showAlert('WhiteSpaces removed', 'success');
    
    }

    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(' ').length} and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} minutes read.</p>
            <h3>Preview:</h3>
            <p>{text.length>0?text:'Enter something above to preview.'}</p>


        </div>
        </>
    )
}