import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pastworks.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CloseButton } from "react-bootstrap";
import portfolioData from "../../utils/data";

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
						<p style={{ whiteSpace: "pre-line" }}>{modalItem.desc}</p>
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

const PastWorks = () => {
	const items = portfolioData;
	const [modalShow, setModalShow] = React.useState({ launch: false, modalItem: "" });
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="pj-container">
			<h1
				data-aos="fade-up"
				data-aos-duration="1200"
			>
				PRO<span style={{ color: "orange" }}>JECTS</span>
			</h1>
			<Tabs>
				<TabList
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<Tab>All</Tab>
					<Tab>React</Tab>
					<Tab>Frontend Projects</Tab>
				</TabList>
				{/* ALL */}
				<TabPanel>
					<div className="tab-container">
						{items.map((item, index) => (
							<div
								data-aos="fade-right"
								data-aos-duration="1000"
								data-aos-delay={(index + 1) % 3 === 1 ? "0" : (index + 1) % 3 === 2 ? "100" : "200"}
								key={item.title + index}
								onClick={() =>
									setModalShow({
										launch: true,
										modalItem: item,
									})
								}
							>
								<div className="tab-content">
									<img src={item.img} />
									<h3>
										<span className="conent-title">{item.title}</span>
									</h3>
								</div>
							</div>
						))}
					</div>
				</TabPanel>
				{/* REACT Projects */}
				<TabPanel>
					<div className="tab-container">
						{items
							.filter((item) => item.cat.includes("react"))
							.map((item, index) => (
								<div
									data-aos="fade-right"
									data-aos-duration="1000"
									data-aos-delay={(index + 1) % 3 === 1 ? "0" : (index + 1) % 3 === 2 ? "100" : "200"}
									key={item.title + index}
									onClick={() =>
										setModalShow({
											launch: true,
											modalItem: item,
										})
									}
								>
									<div className="tab-content">
										<img src={item.img} />
										<h3>
											<span className="conent-title">{item.title}</span>
										</h3>
									</div>
								</div>
							))}
					</div>
				</TabPanel>
				{/* FRONTEND Projects */}
				<TabPanel>
					<div className="tab-container">
						{items
							.filter((item) => item.cat.includes("frontend"))
							.map((item, index) => (
								<div
									data-aos="fade-right"
									data-aos-duration="1000"
									data-aos-delay={(index + 1) % 3 === 1 ? "0" : (index + 1) % 3 === 2 ? "100" : "200"}
									key={item.title + index}
									onClick={() =>
										setModalShow({
											launch: true,
											modalItem: item,
										})
									}
								>
									<div className="tab-content">
										<img src={item.img} />
										<h3>
											<span className="conent-title">{item.title}</span>
										</h3>
									</div>
								</div>
							))}
					</div>
				</TabPanel>
			</Tabs>
			<MyVerticallyCenteredModal
				show={modalShow.launch}
				modalItem={modalShow.modalItem}
				onHide={() => setModalShow({ launch: false, modalItem: "" })}
			/>
		</div>
	);
};

export default PastWorks;
