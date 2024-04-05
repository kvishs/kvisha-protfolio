import './App.css';
import Header from './Header';
import './css/meyawo.css';
import samplePDF1 from "./Resume_KvishaTalaviya.pdf"; 
import { FaFacebook, FaFacebookF, FaGoogle, FaInstagram, FaPinterest, FaPinterestP, FaRssSquare, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function App() {
  return (

    <div data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
<Header/>

    {/* Page Navbar */}
    {/* <nav class={`custom-navbar `}  data-spy="affix" data-offset-top="20">
        <div class="container">
            <a class="logo" href="#"><img src={require("./imgs/logo (4).png")} /></a>
            <ul class="nav">
                <li class="item">
                    <a class="link" href="#home">Home</a>
                </li>
                <li class="item">
                    <a class="link" href="#about">About</a>
                </li>
                <li class="item">
                    <a class="link" href="#service">Service</a>
                </li>
                <li class="item">
                    <a class="link" href="#blog">Blog</a>
                </li>
                <li class="item">
                    <a class="link" href="#contact">Contact</a>
                </li>
            </ul>
            <a id="nav-toggle" class="hamburger hamburger--elastic" >
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
                </a>
        </div>
    </nav> */}
    {/* page header */}
    <header id="home" class="header">
        <div class="overlay"></div>
        <div class="header-content container">
            <h1 class="header-title">
                <span class="up">HI!</span>
                <span class="down">I am Kvisha Talaviya</span>
            </h1>
            <p class="header-subtitle">FRONTEND WEB DEVELOPER</p>

    <a href={samplePDF1} target="_blank" className='btn btn-primary'
                    rel="noreferrer"> 
                    My Resume
                </a> 
           
        </div>
    </header>
  
    {/* about section  */}
    <section class="section pt-0" id="about">
        {/* container  */}
        <div class="container text-center">
            {/* about wrapper  */}
            <div class="about">
                <div class="about-img-holder">
                    <img src={require("./imgs/man.png")} class="about-img"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                </div>
                <div class="about-caption">
                    <p class="section-subtitle">Who Am I ?</p>
                    <h2 class="section-title mb-3">About Me</h2>
                    <p>
I am a Devoted web developer passionate about crafting
innovative digital experiences. Adept at turning concepts
into user-friendly websites, utilizing expertise in frontend. Back-end development. continuous Dedicated to
learning. delivering scalable solutions, and pushing
digital boundaries.                    </p>
                    <a class="btn-rounded btn btn-outline-primary mt-4" href={samplePDF1} download="" role="button">Download CV</a>
                </div>
            </div>
        </div>
    </section> 

    {/* service section  */}
    <section class="section" id="service">
        <div class="container text-center">
            <p class="section-subtitle">What I Do ?</p>
            <h6 class="section-title mb-6">Service</h6>
           
            <div class="row">
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/pencil-case.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">HTML5</h6>
                            <p class="subtitle">HTML5 is a markup language used for structuring and presenting content on the World Wide Web.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/responsive.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">CSS3</h6>
                            <p class="subtitle">Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS standard used in the styling and formatting of Web pages.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/toolbox.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">Bootstrap</h6>
                            <p class="subtitle">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/analytics.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">Javascript</h6>
                            <p class="subtitle">JavaScript is a dynamic computer programming language , interpreted programming language with oop capabilities.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/analytics.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">React js</h6>
                            <p class="subtitle">React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mt-4">
                    <div class="service-card">
                        <div class="body">
                            <img src={require("./imgs/analytics.png")}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"
                                class="icon"/>
                            <h6 class="title">Node js</h6>
                            <p class="subtitle">Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* portfolio section  */}
    <section class="section" id="portfolio">
        <div class="container text-center">
            <p class="section-subtitle">What I Did ?</p>
            <h6 class="section-title mb-6">Portfolio</h6>
            <div class="row">
                <div class="col-md-4">
                    <a href="#" class="portfolio-card">
                        <img src={require("./imgs/folio-1.jpg")} class="portfolio-card-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        <span class="portfolio-card-overlay">
                            <span class="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                    <p class="font-weight-normal">Category: Web Templates</p>
                            </span>
                        </span>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="#" class="portfolio-card">
                        <img class="portfolio-card-img img-responsive rounded" src={require("./imgs/folio-2.jpg")} 
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        <span class="portfolio-card-overlay">
                            <span class="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                    <p class="font-weight-normal">Category: Web Templates</p>
                            </span>
                        </span>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="#" class="portfolio-card">
                        <img class="portfolio-card-img img-responsive rounded" src={require("./imgs/folio-3.jpg")} 
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page"/>
                        <span class="portfolio-card-overlay">
                            <span class="portfolio-card-caption">
                                <h4>Web Designing</h4>
                                    <p class="font-weight-normal">Category: Web Templates</p>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* section  */}
    <section class="section-sm bg-primary">

        <div class="container text-center text-sm-left">

            <div class="row align-items-center">
                <div class="col-sm offset-md-1 mb-4 mb-md-0">
                    <h6 class="title text-light">Want to work with me?</h6>
                    <p class="m-0 text-light">Always feel Free to Contact & Hire me</p>
                </div>
                <div class="col-sm offset-sm-2 offset-md-3">
                    <a role="button" href="#contact"  class="btn btn-lg my-font btn-light rounded">Hire Me</a> 
                </div>
            </div>
        </div> 
    </section>
    <section class="section" id="contact">
        <div class="container text-center">
            <p class="section-subtitle">How can you communicate?</p>
            <h6 class="section-title mb-5">Contact Me</h6>
            {/* contact form  */}
            <form action="" class="contact-form col-md-10 col-lg-8 m-auto">
                <div class="form-row">
                    <div class="form-group col-sm-6">
                        <input type="text" size="50" class="form-control" placeholder="Your Name" required/>
                    </div>
                    <div class="form-group col-sm-6">
                        <input type="email" class="form-control" placeholder="Enter Email" requried/>
                    </div>
                    <div class="form-group col-sm-12">
                        <textarea name="comment" id="comment" rows="6" class="form-control"
                            placeholder="Write Something"></textarea>
                    </div>
                    <div class="form-group col-sm-12 mt-3">
                        <input type="submit" value="Send Message" class="btn btn-outline-primary rounded"/>
                    </div>
                </div>
            </form>
        </div>
    </section>

    {/* footer  */}
    <div class="container">
        <footer class="footer">
            <p class="mb-0">All Right Resceved 2024
            </p>
            <div class="social-links text-right m-auto ml-sm-auto">
                <a class="link"><FaFacebookF/></a>
                <a class="link"><FaTwitter/></a>
                <a class="link"><FaGoogle/></a>
                <a class="link"><FaPinterestP/></a>
                <a class="link"><BsInstagram /></a>
                <a class="link"><FaRssSquare/></a>
            </div>
        </footer>
    </div> 
   

</div>
  );
}

export default App;
