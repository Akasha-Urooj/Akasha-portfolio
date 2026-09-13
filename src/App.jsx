import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import CodeRain from "./components/CodeRain";

function App() {
  return (
    <>
      <CodeRain />

      <Home />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Contact />

      <Chatbot />
    </>
  );
}

export default App;
