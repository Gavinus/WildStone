import { Route, Routes } from "react-router-dom";
import "./App.css";
import Rules from "./components/Rules";
import Landing from "./components/Landing";
import Heroes from "./components/Heroes";
import Battleground from "./components/Battleground";
// import Description from "./components/Description";
import Contact from "./components/Contact";
import Memory from "./components/Memory";

function App() {
  return (
    <div className="bg-[#B2915F] font-belwe">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/heroes" element={<Heroes />} />
        {/* <Route path="/description/:nameClass" element={<Description />} /> */}
        <Route path="/battleground" element={<Battleground />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
