import React, { useEffect, useState } from 'react';

function Header() {
    const [header1, setHeader] = useState("header1")

const listenScrollEvent = (event) => {
  if (window.scrollY < 73) {
    return setHeader("header1")
  } else if (window.scrollY > 70) {
    return setHeader("header2")
  } 
}
useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

    return (
        <nav class={`navbar navbar-expand-md navbar-dark ${header1} fixed-top`} aria-label="Fourth navbar example">
        <div class="container">
          <a class="navbar-brand logo" href="/"><img src={require("./imgs/logo (4).png")} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    
          <div class="collapse navbar-collapse " id="navbarsExample04">
            <ul class="navbar-nav me-auto  mb-md-0">
            <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#service">Service</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            <form role="search">
              {/* <input class="form-control" type="search" placeholder="Search" aria-label="Search"> */}
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Header;
