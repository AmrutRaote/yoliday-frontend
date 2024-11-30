import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Portfolio from "./components/Portfolio";
import Inputs from "./components/Inputs";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App ()
{
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <div className="fixed hidden md:w-64 md:block sm:block">
          <Sidebar />
        </div>

        <div className="md:ml-[236px]">
          <Navbar />
          <div className="sm:h-full bg-slate-100">
            <Routes>
              <Route path="/dashboard" element={ <Dashboard /> } />
              <Route path="/portfolio" element={ <Portfolio /> } />
              <Route path="/inputs" element={ <Inputs /> } />
              <Route path="/profile" element={ <Profile /> } />
              {/* Default Route */ }
              <Route path="/" element={ <Dashboard /> } />
            </Routes>
          </div>
        </div>



        <div className="block mt-auto sm:hidden">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
