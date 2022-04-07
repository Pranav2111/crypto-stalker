import './App.css';
import { Routes, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Crypto from './components/Crypto';
import Nav from './components/Nav';
import Footer from './components/Footer';



function App() {


  return (
    <div className="body">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About />} exact/>
        <Route path="/crypto/:id" element={<Crypto/>} exact/>
        
      </Routes>
      
      <Footer className="footer"/>

      
    </div>
  );
}

export default App;
