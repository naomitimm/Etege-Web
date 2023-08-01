import { Link } from "react-router-dom";
import "./logo.css";
const Logo = () => {
	return (
		<Link to="/" className="logo">
			<h1 className="appHeadline">Etege</h1>
		</Link>
	);
};

export default Logo;
