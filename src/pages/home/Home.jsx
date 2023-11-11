import React from "react";
import Hero from "../../components/hero/Hero";
import Parallax from "../../components/parallax/Parallax";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";

const Home = () => {
	return (
		<>
			<section id="Homepage">
				<Hero />
			</section>
			<section id="About">
				<Parallax type="services" />
			</section>
			<section>
				<Services />
			</section>
			<section id="Portfolio">
				<Parallax type="portfolio" />
			</section>
			<Portfolio />
			<section id="Contact">
				<Contact />
			</section>
		</>
	);
};

// const Home = () => {
// 	return (

// 	);
// };

export default Home;
