import "./reset.css";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Cursor";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import PastWorks from "./pages/pastWorks/PastWorks";
import NoMatch from "./pages/nomatch/NoMatch";
import { useLayoutEffect } from "react";

function Layout() {
	return (
		<>
			<Cursor />
			<Navbar />
			<Outlet />
		</>
	);
}

const App = () => {
	const location = useLocation();
	useLayoutEffect(() => {
		// document.documentElement.scrollTo(0, 0);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [location.pathname]);

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="projects"
						element={<PastWorks />}
					/>
					<Route
						path="*"
						element={<NoMatch />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
