import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="resume">
        <Resume />
      </div>

      <div id="blog">
        <Blog />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default App;
