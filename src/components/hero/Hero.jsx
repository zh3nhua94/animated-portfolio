import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
		},
	},
};

const sliderVariants = {
	initial: {
		x: "-200%",
	},
	animate: {
		x: "200%",
		transition: {
			duration: 30,
			repeat: Infinity,
			repeatType: "mirror",
			times: [0, 1],
		},
	},
};
const Hero = () => {
	return (
		<div className="hero">
			<div className="wrapper">
				<motion.div
					className="textContainer"
					variants={textVariants}
					initial="initial"
					animate="animate"
				>
					<motion.h2 variants={textVariants}>I Am Zen Wong</motion.h2>
					<motion.h1 variants={textVariants}>
						React
						<br /> Web Developer
					</motion.h1>
					<motion.div
						className="buttons"
						variants={textVariants}
					>
						<motion.a
							href="#Portfolio"
							variants={textVariants}
						>
							See the Latest Works
						</motion.a>
						<motion.a
							href="#Contact"
							variants={textVariants}
						>
							Contact Me
						</motion.a>
					</motion.div>
					<motion.img
						variants={textVariants}
						animate="scrollButton"
						src="/scroll.png"
						alt=""
					/>
				</motion.div>
				<div className="imageColumn">
					<motion.div
						className="imageContainer"
						initial={{ x: 100, opacity: 0 }}
						animate={{
							x: 0,
							opacity: 1,
							transition: {
								duration: 0.5,
							},
						}}
					>
						<div className="colorBlock"></div>
						<motion.div
							className="box1"
							animate={{
								scale: [0.9, 1.2, 1.2, 0.9, 0.9],
								rotate: [0, 0, 270, 270, 0],
								borderRadius: ["20%", "20%", "50%", "50%", "20%"],
								backgroundColor: ["#5ECBD0", "#76EDE2", "#5ECBD0", "#76EDE2", "#5ECBD0"],
							}}
							transition={{
								duration: 8,
								ease: "easeInOut",
								times: [0, 0.2, 0.5, 0.8, 1],
								repeat: Infinity,
								repeatDelay: 1,
							}}
						></motion.div>
						<motion.div
							className="box2"
							animate={{
								x: [-10, 10, -10, -30, -10],
								y: [-5, -20, -35, -20, -5],
								width: [105, 105, 105, 150, 105],
								// scale: [0.95, 1.2, 1.2, 1.2, 0.95],
								// rotate: [180, 0, 0, 180, 180],
								backgroundColor: ["#76EDE2", "#5ECBD0", "#5ECBD0", "#5ECBD0", "#76EDE2"],
							}}
							transition={{
								duration: 10,
								ease: "linear",
								times: [0, 0.3, 0.5, 0.7, 1],
								repeat: Infinity,
							}}
						></motion.div>
						<div className="box4"></div>
						<div className="box3"></div>
						<img
							// style={{ display: "none" }}
							src="/hero2.jpg"
							srcSet="/hero2-md.jpg 1200w, /hero2-sm.jpg 600w"
							alt=""
						/>
					</motion.div>
				</div>
			</div>
			<motion.div
				className="slidingTextContainer"
				variants={sliderVariants}
				animate="animate"
				initial="initial"
			>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{
						opacity: [0, 0, 1],
						transition: { duration: 2, times: [0, 0.8, 1] },
					}}
				>
					React Web Developer
				</motion.span>
			</motion.div>
		</div>
	);
};

export default Hero;
