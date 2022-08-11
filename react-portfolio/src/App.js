
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import coverImage from "./assets/cover/techbg.jpg";




function App(){
  return ( 
      <div>
        <About />;
        <Navbar />;
        <Portfolio />;
        <Contact />;
        <Resume />;
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </div> 
  );
}


export default App;