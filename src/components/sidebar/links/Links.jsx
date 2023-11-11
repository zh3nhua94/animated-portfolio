import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
};

const Links = ({ setOpen }) => {
	const items = ["Homepage", "About", "Portfolio", "Contact"];
	return (
		<motion.div
			className="links"
			variants={variants}
		>
			{items.map((item) => (
				<motion.div
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setOpen((prev) => !prev)}
				>
					<HashLink to={`/#${item}`}>{item}</HashLink>
				</motion.div>
			))}
			<motion.a
				href="/projects"
				variants={itemVariants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				Past Projects
			</motion.a>
			<motion.a
				href="/zen_resume.pdf"
				download
				variants={itemVariants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="downloadCV"
			>
				Download CV
			</motion.a>
		</motion.div>
	);
};

export default Links;
