import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

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
      <nav className='container bg-red-400 h-14 text-white flex justify-center items-center'>
        <ul className='flex gap-x-6 items-center text-lg font-semibold'>
          <li
            onClick={() => {
              setCurrentPage("home");
            }}
            className={currentPage === "home" ? "scale-125 font-black cursor-pointer underline" : "cursor-pointer"}
          >Home</li>

          <li
            onClick={() => {
              setCurrentPage("about");
            }}
            className={currentPage === "about" ? "scale-125 font-black underline cursor-pointer" : "cursor-pointer"}
          >About Us</li>

          <li onClick={() => {
            setCurrentPage("contact");
          }}
            className={currentPage === "contact" ? "scale-125 font-black underline cursor-pointer" : "cursor-pointer"}
          >Contact Us</li>
        </ul>
      </nav>

      <CurrentSection />
      <Footer />
    </>
  );
};

export default App;
