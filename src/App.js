import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";


function App() {
  return (
    <div >
     <h1>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
     </h1>
    </div>
  );
}

export default App;
