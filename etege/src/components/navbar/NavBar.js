import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import Logo from "../logo/Logo";
const NavBar = () => {
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 6) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);
	return (
		<nav className={navbar ? "navbar active" : "navbar"}>
			<Logo />
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/self-examination">Self Exams</Link>
				<Link to="/consultations">Consultations</Link>
				<Link to="/donate">Donate</Link>
				<Link to="/login">
					<button>Login</button>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
