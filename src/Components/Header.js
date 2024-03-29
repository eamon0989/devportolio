import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

class Header extends Component {
	render() {
		if (!this.props.data) return null;

		const name = this.props.data.name;
		const description = this.props.data.description;

		return (
			<>
				<header className="h-screen w-screen" id="home">
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

					<div className="row banner w-[85%]">
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
									<a
										href={"https://tryalexandria.com"}
										target="_blank"
										className="button flex flex-row items-center btn project-btn"
										rel="noreferrer"
									>
										<i className="hidden sm:block whitespace-nowrap fa fa-book"></i>Check out Alexandria
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
				</header>
			</>
		);
	}
}

export default Header;
