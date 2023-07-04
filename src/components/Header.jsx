import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <nav id="nav-wrap">
          <a 
            className="mobile-btn" 
            href="#nav-wrap" 
            title="Show Navigation">
            Show Navigation
          </a>
          <a
            className="mobile-btn" 
            href="#home"
            title="Hide Navigation">
            Hide Navigation
          </a>

          <ul id="nav" class="nav">
            <li className="current">
              <a href="#home" className="smoothscroll">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="smoothscroll">
                About
              </a>
            </li>

            <li>
              <a href="#resume" className="smoothscroll">
                Resume
              </a>
            </li>

            <li>
              <a href="#contact" className="smoothscroll">
                Contact
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
              <h3>{description}</h3>
            </Fade>
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;