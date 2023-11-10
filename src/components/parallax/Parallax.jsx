import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
	//targe the parallax section
	const ref = useRef();
	//set scroll progress to target
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], //start start = When start of page reaches the top of viewport, end start = When the end of page reached the start of viewport
	});
	//[0,1] means top of page to 0, end of bottom page after scroll is 1, which tele with ["0%", "100%"] as position
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

	return (
		<div
			className="parallax"
			ref={ref}
			style={{
				background:
					type === "services"
						? "linear-gradient(180deg, #111132, #0c0c1d)"
						: // : "linear-gradient(180deg, #111132, #505064",
						  "linear-gradient(180deg, #111132, #014760",
			}}
		>
			<motion.h1 style={{ y: yText }}>{type === "services" ? "About Me" : "My Works"}</motion.h1>
			<div
				className="mountains"
				style={{ transform: `${type === "services" ? "none" : "scaleX(-1)"}` }}
			></div>
			<motion.div
				style={{
					y: yBg,
					backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,
				}}
				className="planets"
			></motion.div>
			<motion.div
				style={{ x: yBg }}
				className="stars"
			></motion.div>
		</div>
	);
};

export default Parallax;
