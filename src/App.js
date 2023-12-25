import logo from './logo.svg';
import './App.css';
import Navigation from './nav/Navigation';
import Home
 from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/fira-code";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  return (
    <HashRouter>

<div className="App">
      <Navigation/>
      

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
    </div>
    </HashRouter>
    
  );
}

export default App;
