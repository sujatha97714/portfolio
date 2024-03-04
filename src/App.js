import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
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
      </div>
    </div>
  );
}

export default App;
