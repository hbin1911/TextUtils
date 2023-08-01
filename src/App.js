
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from "./Components/TextForm";
import Alert from './Components/Alert';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () =>{
    if (mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your content" mode={mode}/>
    {/* <About/> */}

    </div>
    
    </>
  );
}

export default App;
