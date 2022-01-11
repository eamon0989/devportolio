import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;
    const alexandrialogo = "images/alexandrialogo1.png";

    return (
      <><header id="home">
        <ParticlesBg type="lines" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={'https://tryalexandria.com'} className="button btn project-btn">
                  <i className="fa fa-book"></i>Check out my most recent project
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#Alexandria">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header><header id="Alexandria">
          <ParticlesBg type="lines" bg={true} />
          <div className="row banner">
            <div className="banner-text">
              <Fade bottom>
                <div className="react-reveal three columns">
                  <img
                    className=""
                    src={alexandrialogo}
                    alt="Alexandria Logo"
                  />
                </div>
              </Fade>
              <Fade bottom duration={1200}>
                <h3 className="react-reveal">{"Alexandria, an interactive app for learning languages through texts, is by far the most technically interesting and challenging project I've worked on. To understand the current extent of my engineering abilities, it's worth taking a look at Alexandria. I would recommend looking at the case study to see the technical decisions that we made and why we made them, as well as a walkthough of how we went about designing the app and the challenges we overcame."}</h3>
              </Fade>
              <hr />
              <Fade bottom duration={2000}>
                <ul className="social">
                  <a href={'https://alexandria-reader.github.io/'} className="button btn project-btn">
                    <i className="fa fa-book"></i>Case Study
                  </a>
                  <a href={'https://github.com/alexandria-reader'} className="button btn github-btn">
                    <i className="fa fa-github"></i>Github
                  </a>
                </ul>
              </Fade>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header></>
    );
  }
}

export default Header;
