import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/Intro';
import Project from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import { useScrollPosition } from "./hooks/useScrollPosition";

function App() {

  const scrollPosition = useScrollPosition();

  const scrollToPosition = (val) => {
    
    window.scrollTo({
      top: val, // specify the y-coordinate
      left: 0, // specify the x-coordinate
      behavior: 'smooth' // smooth scrolling
    });
  };
  

  return (
    <>
    <div>

      <Header></Header>
      <Intro></Intro>
      <Project></Project>
      <Skills></Skills>
      <About></About>
      <Footer></Footer>
      <a className={`${scrollPosition>100?"block":"hidden"} w-10 h-10 scrollUp fixed text-2xl text-white hover:bg-[#E5383B] transition-all ease-in-out duration-500 right-8 opacity-80 z-50 px-3 py-1 rounded-lg bg-[#F3A3A5] bottom-20  text-center cursor-pointer`} onClick={()=>{scrollToPosition(0)}}>&#8593;</a>
    </div>
    </>
  );
}

export default App;
