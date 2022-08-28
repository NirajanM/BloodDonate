import * as React from 'react';
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
      <nav className='container bg-red-400 h-16 text-white flex justify-end pr-4 md:pr-8 lg:pr-12 items-center'>
        <div className='absolute left-6 top-0'>
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
          >Home</li>
          <li
            onClick={() => {
              setCurrentPage("about");
            }}
            className={currentPage === "about" ? "scale-125 border rounded-sm p-1 bg-slake-200 font-black underline cursor-pointer hover:bg-slate-300" : "cursor-pointer hover:bg-slate-300 hover:rounded-sm"}
          >About Us</li>

          <li onClick={() => {
            setCurrentPage("contact");
          }}
            className={currentPage === "contact" ? "scale-125 border rounded-sm p-1 bg-slake-200 font-black underline cursor-pointer hover:bg-slate-300" : "cursor-pointer hover:bg-slate-300 hover:rounded-sm"}
          >Contact Us</li>
        </ul>
      </nav>

      <CurrentSection />
      <Footer />
    </>
  );
};

export default App;
