import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');   // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);  // alert is a object

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      // setInterval(() =>{                               // title me kuch baar baar chamkane ke liye :)
      //   document.title = 'TextUtils is Amazing !'
      // }, 2000);
      // setInterval(() =>{
      //   document.title = 'Install TextUtils Now !'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Navbar/> */}
    {/* <Navbar title="TextUtils" aboutText="About"/> */}

    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">

    {/* <Routes> */}
    {/* /users --> Component 1
        /users/home --> Component 2 */}
         {/* <Route exact path="/about" element={<About/>}>
          </Route> 
          <Route path="/home" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}> 
          </Route>
    </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
