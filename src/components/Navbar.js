import React from 'react'
import {Link} from 'react-router-dom' //link use karne ke liye import kiya. link se component clickable bante hain

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} `}> {/*this used for navbar*/}
  <div className="container-fluid">
    <a className="navbar-brand" to="/title"> {props.title}</a>  {/*here passed props */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className = "collapse navbar-collapse" id="navbarSupportedContent"> 
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link> {/*here used link*/}
        </li>
        <li className="nav-item">
          <Link className=" nav-link" to="/about">{props.aboutText}</Link>{/*use props*/}{/*and here also use link*/}
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/TextForm">Textform</Link>
        </li>
      </ul>
    </div>

    <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.EnableMode('primary')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></div>{/*yaha 'primary' name ka arguement pass kiya jo 'cls' name ki class ki help se kaam karega*/}
      <div className="bg-danger rounded mx-2" onClick={()=>{props.EnableMode('danger')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.EnableMode('success')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.EnableMode('warning')}} style={{height: '30px', width: '30px',cursor:'pointer'}}></div>
    </div>
                     {/* Switch1 */}
        <div className={`form-check form-switch text-${props.Mode==='light' ? 'dark':'light'}`}> {/*used for navbar text color*/}
          <input className="form-check-input" onClick={()=>{props.EnableMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> {/*click karne par EnableMode operation perform hoga*/} {/*aur yaha arguement mein 'null' pass kiya*/}
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
        </div> 
    </div> 
</nav>
</>
 )
 }