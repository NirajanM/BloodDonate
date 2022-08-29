import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Logo from './img/bloodDonationLogo.png';

interface iAllPages {
  home: React.FunctionComponent;
  about: React.FunctionComponent;
  contact: React.FunctionComponent;

}

const allPages: iAllPages = {
  home: Home,
  about: AboutUs,
  contact: ContactUs
}

const App: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<string>("home");
  const CurrentSection: React.FunctionComponent = allPages[currentPage as keyof typeof allPages];
  return (
    <>
      <Router>
        <nav className='container bg-red-400 h-20 text-white flex justify-end pr-1 md:pr-4 lg:pr-8 items-center'>
          <div className='absolute left-6 top-2'>
            <img src={Logo} className="w-16" alt="logo" onClick={() => {
              setCurrentPage("home");
            }} />
          </div>
          <ul className='flex gap-x-6 items-center text-lg font-semibold'>

            <li
              onClick={() => {
                setCurrentPage("home");
              }}
              className={currentPage === "home" ? "scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-slate-300" : "cursor-pointer hover:bg-slate-300 hover:rounded-sm"}
            ><Link to="/">Home</Link></li>

            <li
              onClick={() => {
                setCurrentPage("about");
              }}
              className={currentPage === "about" ? "scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-slate-300" : "cursor-pointer hover:bg-slate-300 hover:rounded-sm"}
            ><Link to="/about">About</Link></li>

            <li
              onClick={() => {
                setCurrentPage("contact");
              }}
              className={currentPage === "contact" ? "scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-slate-300" : "cursor-pointer hover:bg-slate-300 hover:rounded-sm"}
            ><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>


      <CurrentSection />
      <Footer />
    </>
  );
};

export default App;
