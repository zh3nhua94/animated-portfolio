import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
	const [position, setPosition] = useState({ x: -100, y: -100 });
	//function for followmouse
	useEffect(() => {
		const mouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", mouseMove);
		//always clean up when using addEventListener in useEffect
		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	// Hover link function
	const mouseCursor = document.querySelector(".cursor");
	const linksHovered = document.querySelectorAll("a, button, .tab-content, .react-tabs__tab");
	linksHovered.forEach((link) => {
		link.addEventListener("mouseleave", () => {
			mouseCursor.classList.remove("link-grow");
		});

		link.addEventListener("mouseover", () => {
			mouseCursor.classList.add("link-grow");
		});
	});

	return (
		<motion.div
			className="cursor"
			initial={{ x: -100, y: -100 }}
			animate={{ x: position.x, y: position.y }}
		></motion.div>
	);
};

export default Cursor;
