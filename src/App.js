import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/Intro';
import Project from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <div className='h-full'>
      <Header></Header>
      <Intro></Intro>
      <Project></Project>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
