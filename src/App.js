

import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";



const App=() => {
  return (
    <BrowserRouter>

    <div className="App">
     <NavBar/>
   
     <Route path="/" Component={Home} />
     <Route path="/contact" Component={Contact} />
     <Route path="/about" Component={About} />
   
    </div>
    </BrowserRouter>
  );
}

export default App;
