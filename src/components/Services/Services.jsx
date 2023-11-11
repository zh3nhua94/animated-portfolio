import React, { useRef } from "react";
import Slider from "react-slick";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
};

const Services = () => {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-50px" });
	const settings = {
		arrows: false,
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<motion.div
			className="services"
			variants={variants}
			initial="initial"
			// whileInView="animate"
			ref={ref}
			animate={"animate"}
		>
			<motion.div
				className="textContainer"
				variants={variants}
			>
				<p>
					I focus on helping your brand grow
					<br /> and move forward
				</p>
				<hr />
			</motion.div>
			<motion.div
				className="titleContainer"
				variants={variants}
			>
				<div className="imgCol">
					<div className="titleImg"></div>
				</div>
				<div className="title">
					<h1>
						Being a <b>Web developer</b>
						<br />
						is my <b>Passion & Focus</b>.
					</h1>
					<a href="/projects">See My Works</a>
				</div>
			</motion.div>
			<motion.div
				className="listContainer"
				variants={variants}
			>
				<Slider
					className="serviceSlider"
					{...settings}
				>
					<motion.div className="box">
						<h6>Building Personal Brands</h6>
						<p>
							I love building powerful websites that can help personal brands to make better connections with their
							customers.
						</p>
						<a href="#Portfolio">See Demos</a>
					</motion.div>
					<motion.div className="box">
						<h6>Frontend Developer</h6>
						<p>
							I build high-performing, beautiful frontend products with great user experiences. If you're interested in
							past projects, you can view them here.
						</p>
						<a href="/projects">See Frontend Projects</a>
					</motion.div>
					<motion.div className="box">
						<h6>Engineering</h6>
						<p>
							In building JavaScript applications, I can absolutely deliver fast, resilient solutions optimized for
							performance and scalabilty.
						</p>
						<a
							href="/zen_resume.pdf"
							download
						>
							Download CV
						</a>
					</motion.div>
					<motion.div className="box">
						<h6>Hire an Expert</h6>
						<p>
							Are you looking for a React Web developer? Feel free to reach out to me or just send me a friendly hello!
						</p>
						<a href="#Contact">Contact</a>
					</motion.div>
				</Slider>
			</motion.div>
		</motion.div>
	);
};

export default Services;
