import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Logo from './img/bloodDonationLogo.png';


const App: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = React.useState<string>("home");
  const [navbar, setNavbar] = React.useState<boolean>(false);
  return (
    <>
      <Router>
        <nav className="w-full bg-red-400 shadow">
          <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-4 md:pr-8">
            <div>
              <div className="flex items-center justify-between py-3 pl-1 md:py-5 md:block">
                <Link to="/">
                  <img src={Logo} className="w-16" alt="logo" onClick={() => {
                    setCurrentPage("home");
                  }} />
                </Link>

                <div className="md:hidden">
                  <button
                    className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                          color='white'
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                          color='white'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 pb-4 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                  }`}
              >
                <ul className="items-center justify-center text-center text-white space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li
                    onClick={() => {
                      setCurrentPage("home");
                    }}
                    className={currentPage === "home" ? "md:scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-red-500" : "cursor-pointer  hover:border-b-2"}
                  ><Link to="/">Home</Link></li>

                  <li
                    onClick={() => {
                      setCurrentPage("about");
                    }}
                    className={currentPage === "about" ? "md:scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-red-500" : "cursor-pointer hover:border-b-2 "}
                  ><Link to="/about">About Us</Link></li>

                  <li
                    onClick={() => {
                      setCurrentPage("contact");
                    }}
                    className={currentPage === "contact" ? "md:scale-125 border rounded-sm p-1 bg-slake-200 font-black cursor-pointer hover:bg-red-500" : "cursor-pointer  hover:border-b-2"}
                  ><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/*" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

