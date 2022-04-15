import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarLogin from "./components/BarLogin";
import Heroes from "./components/Heroes";
import Heroe from "./components/Heroe";
import Landing from "./components/Landing";


function App() {
  return (
    <Router>
    <div className="bg-[#B2915F]" App>
        <nav>
          <ul>{/* Add your links here */}
          <BarLogin/>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/BarLogin" element={<BarLogin />} />
          <Route path="/Heroes" element={<Heroes />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
    );
};

export default App;