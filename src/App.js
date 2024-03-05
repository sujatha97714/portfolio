import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import SecondSection from './components/SecondSection';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <Nav />
      <div id="main">
        <AboutMe />
        <Experience />
        <Projects />
        <SecondSection />
        <GetStarted />
        <Footer />
      </div>
    </div>
  );
}

export default App;
