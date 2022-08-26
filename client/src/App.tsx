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
        <nav>
          <ul>
            <li onClick={() => {
              setCurrentPage("home");
            }}>Home</li>
            <li onClick={() => {
              setCurrentPage("about");
            }}>About Us</li>
            <li onClick={() => {
              setCurrentPage("contact");
            }}>Contact Us</li>
          </ul>
        </nav>
      </header>
      <CurrentSection />
      <Footer />
    </>
  );
};

export default App;
