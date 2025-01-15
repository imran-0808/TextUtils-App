
import React from 'react'

export default function About(props) {
//style dene ke liye style ko object ki form mein likh lete hain jo bhi dena hai. but yaha hooks mein styling dee taki aage use kar sake
//  const [myStyle, setMyStyle] = useState({
//  color:'black',
//  backgroundColor:'white',
//   })
 
//  const[btnText,setBtnText]=useState("Enable dark mode") //yaha again hooks used kiya

/*  const DarkModeEnable=()=>{
     if(myStyle.color==="black"){
       setMyStyle({
         color:'black',
         backgroundColor:'white',
       })
       setBtnText("Enable dark mode")
     }
     else {
       setMyStyle({
         color:'black',
         backgroundColor:'white',
         border:'1px solid white'
       })
       setBtnText("Enable Light Mode")
     }
  }     */

      let myStyle={
      color:props.Mode==='dark'?'white':'#574d4d',
      backgroundColor:props.Mode==='dark'?'#574d4d':'white',
     } 

    return(
      <div className="container" style={{color:props.Mode==='dark'?'white':'#574d4d'}}> {/*fir style ko is tarah kahi daal sakte hain*/}
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} /*give the style here*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze Your text</strong> {/*strong used for make bold text*/}
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
         Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} /*give the style here*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free to use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Textutils is a free tool that provides instant character & word count statics for a given text. TextUtils report number of words and character
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}/*give the style here*/ type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compitable</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count charater in facebook, blog, books, excel document, pdf essays, etc.
        </div>
      </div>
    </div>
  </div>

  {/* <div className="container my-1">
      <button type="button" className="btn btn-primary"onClick={DarkModeEnable}> {btnText} </button>
  </div> */}

</div>
  )
}
