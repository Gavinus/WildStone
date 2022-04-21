import { Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Rules from "./components/Rules";
import Heroes from "./components/Heroes";
import Battleground from "./components/Battleground";
import Landing from "./components/Landing";
import BarLogin from "./components/BarLogin";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#B2915F] font-belwe">
      <BarLogin />
      <Menu />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/battleground" element={<Battleground />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
