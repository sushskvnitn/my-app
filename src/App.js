import Navbar from "../src/components/Navbar";
import React, { useState } from "react";

import "./App.css";
// import About from "./components/About";
import Textform from "./components/Textform";
// import Alert from './components/Alert';
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  // const [alert, setalert] = useState();
  // const showalert =(message,type)=>{
  //   setalert({
  //     msg:message,
  //     type : type
  //   })
  // }
  const togmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#876161";
      document.title = "textutils-dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "textutils-light mode";
    }
  };
  return (<>
    {/* <Router>
      
      {/* <Alert ></Alert> */}
      
        {/* <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/">
           
          
          </Route>
        </Switch>
      </Router> */}<Navbar title="Textconvo"  mode={mode} togmode={togmode} /><Textform heading="ENTER YOUR TEXT"about=" about " mode={mode} togmode={togmode}/>
       {/* <About /> */}
    </>
  );
}

export default App;
