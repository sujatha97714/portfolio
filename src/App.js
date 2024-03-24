import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import SecondSection from './components/SecondSection';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <div id="main">
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        {/* <SecondSection /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
