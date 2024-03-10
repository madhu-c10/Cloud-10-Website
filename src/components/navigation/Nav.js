import React from 'react';
import { Outlet, useNavigate,useLocation, } from 'react-router-dom';
import { navimg } from '../../images/image';
import './nav.css';


const Link = ( { to, children }) => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleClicked = () => {
      const bars = document.getElementById("bars");
  
      bars?.classList.add("show");
  
      setTimeout(() => {
        bars?.classList.remove("show");
        bars?.classList.add("hide");
        navigate(to);
      }, 800);
  
      setTimeout(() => bars?.classList.remove("hide"), 1600);
    };
  
    return (
      <a
         className={"active"} 
        onClick={handleClicked}
      >
         {children} 
      </a>
    );
  };


const Bars = () => {
    return (
      <div id="bars" className="bars">
        <div />
        <div style={{ animationDelay: "0.1s" }} />
        <div style={{ animationDelay: "0.2s" }} />
        <div style={{ animationDelay: "0.3s" }} />
        <div style={{ animationDelay: "0.4s" }} />
      </div>
    );
  };

function Nav() {
  return (
    <>
          <nav>
        <img className='img-thumbnail header-img' src={navimg}/>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Work</Link>
          </li>
        </ul>
      </nav>

      <Bars/>

      <Outlet />
    </>
  )
}

export default Nav;