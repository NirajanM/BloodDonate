import * as React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
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
      <header className='container bg-blue-300 text-white'>
        <nav className='flex justify-center items-center'>
          <ul className='flex justify-around space-x-8 items-center'>
            <li
              onClick={() => {
                setCurrentPage("home");
              }}
              className={currentPage === "home" ? "scale-125 font-black cursor-pointer" : "cursor-pointer"}
            >Home</li>

            <li
              onClick={() => {
                setCurrentPage("about");
              }}
              className={currentPage === "about" ? "scale-125 font-black cursor-pointer" : "cursor-pointer"}
            >About Us</li>

            <li onClick={() => {
              setCurrentPage("contact");
            }}
              className={currentPage === "contact" ? "scale-125 font-black cursor-pointer" : "cursor-pointer"}
            >Contact Us</li>

          </ul>
        </nav>
      </header>
      <CurrentSection />
      <Footer />
    </>
  );
};

export default App;
