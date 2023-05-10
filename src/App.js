import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//PAGES
import Home from "./Pages/Home";
import Error from "./Pages/Error";

//COMPONENTS
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer />
    </Router>

    </div >
  );
}

export default App;
