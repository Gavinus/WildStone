import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BarLogin from "./components/BarLogin";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
    <div className="h-screen bg-[#50d71e] App">
        <nav>
          <ul>{/* Add your links here */}</ul>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;