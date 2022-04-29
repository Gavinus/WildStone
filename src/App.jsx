import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Menu from "./components/Menu";
import Rules from "./components/Rules";
import Landing from "./components/Landing";
import Heroes from "./components/Heroes";
import Battleground from "./components/Battleground";
import Description from "./components/Description";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="bg-[#B2915F] font-belwe">
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />}>
          <Route path="rules" element={<Rules />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="description/:nameClass" element={<Description />} />
          <Route path="battleground" element={<Battleground />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
