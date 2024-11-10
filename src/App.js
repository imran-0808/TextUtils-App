
import './App.css';

import {Routes, Route} from 'react-router-dom';//jo bhi Route chahiye vo is component ke under import karte hain 

import Navbar from './components/Navbar.js' //import Navbar.js file
import PropTypes from 'prop-types'     //here import proptype for used
import TextForm from './components/TextForm.js';
import { useState } from 'react'; //import useState(Hooks)
import Alert from './Alert.js';
import About from './components/About.js';

function App() {
  const [mode, setMode] = useState('light') //Wheather dark mode enable or not
  const [alert,setAlert] = useState('null');
  
  const showAlert=(message,type)=>{ //isme message,type ka matlab hai first string(dark mode has been enabled) message hogi vo message and second(success) type hogi. iski jagah aur bhi arguement le sakte the
    setAlert({
      msg: message,
      typ:type
    })
  }

  setTimeout(() => {
    setAlert('null')
  }, 3000); //3 sec baad alert autmatic remove ho jayega

const RemoveBodyClasses=()=>{ //remove ke liye function banaya taki ek se dusre par click kare to pehale wala remove ho jaye
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
}

  const toggleMode=(cls)=>{
    RemoveBodyClasses() //and here called remove function

    document.body.classList.add('bg-'+cls) //jo bhi 'cls' hoga vo cls mein aa jayega ex 'primary' 
    
      if(mode==="light") {
      setMode("dark")
      document.body.style.backgroundColor="grey"; //here set the body background color is grey
      showAlert('Dark mode has been Enabled','success') //isme first string message banegi and second type
      document.title='TextUtils - Dark Mode' //change browser title
  }
    else {
      setMode("light")
      document.body.style.backgroundColor="white"; //here set the body background color is white
      showAlert('Light mode has been Enabled','success') //isme first string message banegi and second type
      document.title='Textutils - Light Mode' //change browser title
    }
  }

  return (
  <>
  <div className="container my-3"> {/*container and my-3 bootstrap ki class hai jisme container text box se looking better hoti hai hai aur my-3 se thoda space ata hai */}
    {/*diff pages without Router */}
    <Navbar title="TextUtils" aboutText="about" Mode={mode} EnableMode={toggleMode}/> 
    <Alert Alert={alert}/>

          {/*diff pages use in Router */}{/*isi tarah se router mein component use karte hai for single page application */}
   <Routes>
      <Route exact path='/About' element ={<About Mode={mode}/>}/> {/*yaha exact use kiya ise use karne se browser eaxct matching karta hai jab koi bhi component search karte hain agar kahi 'about' and 'about/home' component hai to eaxct use karne par only matchin component hee ayega */}
      <Route path='/TextForm' element={<TextForm textAlert={showAlert} heading="Try TextUtils-word counter, character counter" Mode={mode}/>}/>
   </Routes> 
  </div>
  </>
  );
}

export default App;

Navbar.propTypes={ //This is propTypes isme value ka Type set karte hain
  title:PropTypes.string,//jaise string kiya to string value hee pass kar sakte hain
  aboutText:PropTypes.string
}
/*
 Navbar.defaultProps={ //yah default propTypes hai isme bina props pass kiye iske under hee components ki value set kar sakte hain
   title: 'set title here', //here set title component value
   aboutText: 'about text here'
 }        */
