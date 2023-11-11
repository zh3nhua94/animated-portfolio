import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button, CloseButton } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import portfolioData from "../../utils/data";

const Single = ({ item, setModalShow, index, lastItem }) => {
	const ref = useRef();
	const containerRef = useRef();
	const { width } = useWindowDimensions();
	const { scrollYProgress } = useScroll({
		target: ref,
		// container: containerRef,
		// offset: ["start start", "end start"],
	});

	const y =
		width > 768
			? useTransform(scrollYProgress, [0, 1], [-300, 300])
			: useTransform(scrollYProgress, [0, 1], [-100, 100]);
	return (
		<section
			className="portfolio-section"
			// ref={containerRef}
		>
			<div className="container">
				<div className="wrapper">
					<div
						className="imgCol"
						ref={ref}
					>
						<div className="pf-imgContainer">
							<img
								src={item.img}
								alt=""
								onClick={() =>
									setModalShow({
										launch: true,
										modalItem: item,
									})
								}
							/>
						</div>
					</div>
					<motion.div
						className="textContainer"
						style={{ y: y }}
					>
						<h2>{item.title}</h2>
						<h5>{item.descTitle}</h5>
						<p>{item.desc}</p>
						<div className="buttonGroup">
							<Button
								variant="outline-warning"
								onClick={() =>
									setModalShow({
										launch: true,
										modalItem: item,
									})
								}
							>
								<FaCirclePlay /> Video Presentation
							</Button>
							{item.code && (
								<Button
									variant="outline-warning"
									href={item.code}
									target="_blank"
									rel="nofollow"
								>
									Source Code
								</Button>
							)}
							{(item.url || item.demo) && (
								<Button
									variant="outline-warning"
									href={item.url || item.demo}
									target="_blank"
									rel="nofollow"
								>
									{item.demo ? "See Demo" : "Visit Site"}
								</Button>
							)}
						</div>
					</motion.div>
					{index + 1 === lastItem && (
						<Link
							to="/projects"
							className="pastProj-btn"
						>
							<button>
								More Past Projects <FaAnglesRight />
							</button>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

function MyVerticallyCenteredModal(props) {
	const { modalItem, ...others } = props;
	return (
		<Modal
			{...others}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header>
				<Modal.Title
					id="contained-modal-title-vcenter"
					className="modal-pjTitle"
				>
					{modalItem.title}
				</Modal.Title>
				<CloseButton
					variant="white"
					onClick={props.onHide}
				/>
			</Modal.Header>
			<Modal.Body>
				{modalItem.desc && <h6>{modalItem.descTitle ? modalItem.descTitle : "Description:"}</h6>}
				<div className="modal-content-row">
					<div>
						<p>{modalItem.desc}</p>
					</div>
					<div className="button-group">
						{modalItem.code && (
							<Button
								variant="outline-warning"
								href={modalItem.code}
								target="_blank"
								rel="nofollow"
							>
								Source Code
							</Button>
						)}
						{(modalItem.url || modalItem.demo) && (
							<Button
								variant="outline-warning"
								href={modalItem.url || modalItem.demo}
								target="_blank"
								rel="nofollow"
							>
								{modalItem.demo ? "See Demo" : "Visit Site"}
							</Button>
						)}
					</div>
				</div>
				{modalItem.youtubeId ? (
					<div className="yt-embed">
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${modalItem.youtubeId}?rel=0`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
				) : modalItem.img ? (
					<img src={modalItem.siteImg} />
				) : (
					""
				)}
			</Modal.Body>
		</Modal>
	);
}

const Portfolio = () => {
	const items = portfolioData;
	// const containerRef = useRef();
	const ref = useRef();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end end", "start start"],
	});
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
	});
	const [modalShow, setModalShow] = React.useState({ launch: false, modalItem: "" });

	return (
		<div
			className="portfolio"
			ref={ref}
		>
			<div className="progressDiv">
				<h1>Featured Works</h1>
				<motion.div
					style={{ scaleX: scaleX }}
					className="progressBar"
				></motion.div>
			</div>
			{items
				.filter((item) => item.cat.includes("react"))
				.map((item, index, arr) => (
					<Single
						item={item}
						key={item.id}
						setModalShow={setModalShow}
						index={index}
						lastItem={arr.length}
					/>
				))}
			<MyVerticallyCenteredModal
				show={modalShow.launch}
				modalItem={modalShow.modalItem}
				onHide={() => setModalShow({ launch: false, modalItem: "" })}
			/>
		</div>
	);
};

export default Portfolio;
