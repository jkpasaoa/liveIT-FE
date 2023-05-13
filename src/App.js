import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react";

//PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

//COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Components/About";
// import DarkModeToggle from "./Components/DarkMode";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
        <Router>
          <NavBar />
          {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/snacks" element={<Index />} />
              <Route path="/snacks/:id" element={<Show />} />
              <Route path="/snacks/new" element={<New />} />
              <Route path="/snacks/:id/edit" element={<Edit />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </Router>
    </div >
  );
}

export default App;
