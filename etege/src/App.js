import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowComponent from "./components/show-navbar/ShowNavbar";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
function App() {
	return (
		<Router>
			<div className="App">
				<ShowComponent>
					<NavBar />
				</ShowComponent>
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
				<ShowComponent>
					<Footer />
				</ShowComponent>
			</div>
		</Router>
	);
}

export default App;
