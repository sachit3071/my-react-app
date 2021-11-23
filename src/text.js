import {useState} from 'react'

function TextBox()
{

    const handleOnChange = (event)=>
    {
        setText(event.target.value)
        console.log(text);
    }
    const handleUpperCase = ()=>
    {
        console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = ()=>
    {
        console.log("uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = ()=>
    {
        console.log("uppercase was clicked" + text)
        let newText = "";
        setText(newText);
    }
    const [text, setText] = useState('enter ');
    return(
            <div className="mb-3">
                <label  className="form-label">Example textarea - {text}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="btn-primary mx-2" onClick={handleUpperCase}>uppercase</button>
                <button className="btn-primary mx-2" onClick={handleLowerCase}>lowercase</button>
                <button className="btn-primary mx-2" onClick={handleClear}>clear</button>
            </div>
    );
}

export default TextBox;