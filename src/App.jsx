import "./App.css";
import Menu from "./components/Menu";




// function App() {    



//   return (
// <<<<<<< Updated upstream
//     <div className="h-screen bg-[#B2915F] App">
//       <nav>
//         <Landing />
//         <Menu />
//         <ul>{/* Add your links here */}</ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/menu" element={<Menu />} />
//       </Routes>
// =======
//     <div className="App">
//       <Menu />

// >>>>>>> Stashed changes
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from 'react-router-dom';
import BarLogin from "./components/BarLogin";
import Heroes from "./components/Heroes";
import Landing from "./components/Landing";


function App() {
  return (
    <div className="bg-[#B2915F]">
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
    );
};

export default App;
