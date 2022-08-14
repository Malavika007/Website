import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro";

function App() {
  return (
   <main className="text-gray-400 bg-black body-font">
 
<About/>
<Intro/>

<Projects/>
<Skills/>
<Contact/>
   </main>
  );
}

export default App;
