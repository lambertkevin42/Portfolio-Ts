import React, { useEffect } from "react";
import { useLocation, Location } from "react-router-dom";
import Header from "../Header/Header";
import './app.scss';

const App: React.FC = () => {
    const location: Location = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location]);
  
    return (
      <div className="app">
        <Header/>
      </div>
    );
};

export default App;