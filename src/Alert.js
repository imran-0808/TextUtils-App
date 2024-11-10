import React from 'react'
function Alert(props) {
   
  return (
    <div style={{display:'flex',justifyContent:'center',height:'10vmin'}}>
      <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below.*/} {/*is line ki jagah neeche props use kiya and ise comment kiya*/}
        <strong>{(props.Alert.typ)}</strong> {props.Alert.msg} {/*ise hum bina strong ke bhi use kar sakte hain but strong se text thoda bold ban jata hai*/}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */} {/*yah cross button ki line hai*/}
      </div>
    </div>
  )
}

export default Alert

