import React, {useState} from 'react' //yaha useState hook import kiya

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText=text.toUpperCase()
    setText(newText)
    props.textAlert('Converted to Uppercase', "success")
  }

   const handleLowClick=()=>{
    const newText=text.toLowerCase()
    setText(newText);
    props.textAlert('Converted to LowerCase','success')
  }
  const handleClearClick=()=>{
    const clearText='';
    setText(clearText)
    props.textAlert('Text has been cleared','success')
  }
  const handleCopy =()=>{
    navigator.clipboard.writeText(text);
    props.textAlert('Copied to Clipboard!', 'success')
  }
  const handleExtraSpaces =()=>{
    let space=text.split(/[ ]+/)
    setText(space.join(' '))
    props.textAlert('Extra spaces removed', 'success')
  }

  const handleOnChange = (event)=>{
  setText(event.target.value);
  }

  const [text, setText] = useState(''); //this is hooks isme text ek variable hai jisme value pass kar sakte hain and setText se value ko set(update) kar sakte hain 

  return (
    <>
    <div className="container" style={{color:props.Mode==='dark' ? 'white' : "black"}}> {/*yaha se all text ka color change hoga */}
    <div className='container'>
      <h1 className='mb-2'>{props.heading}</h1>
      <div>
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark' ? '#706565' : 'white' , color:props.Mode==='dark' ? 'white':'black'}} id="myBox" rows="8"></textarea> {/*yaha text variable ko dala yaha text box mein changes kiye*/}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button> {/*yaha onclick par function ka name dal diya taki click karne par jo function mein operation kiya hai vo yaha perform ho jaye */}
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Remove Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p> {/*agar text 0 se chota(empty) hai to yah string show karo else text ka preveiw de do*/}
    </div>
   </div>
    </>
  )
}
