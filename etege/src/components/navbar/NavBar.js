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
				<Link to="/self-exams">Self Exams</Link>
				<Link to="/about">Consultations</Link>
				<Link to="/register">
					<button>Register</button>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
