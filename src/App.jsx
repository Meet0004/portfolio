import { useMediaQuery } from 'react-responsive';
import Header from './components/Header/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Experience from './components/Home/Experience';
import Footer from './components/Footer/Footer';
import './styles/index.css';
import PortfolioShowcase from './components/Project/PortfolioShowcase';
import Project from './components/Project/MobilePortfolioShowcase.jsx';
import Certificates from './components/Certificates/Certificates.jsx';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="portfolio-theme">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="portfolio-main">
        <Home />
        <About />
        <Skills />
        <Experience />
        {isMobile ? <Project /> : <PortfolioShowcase />}
      </main>
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
