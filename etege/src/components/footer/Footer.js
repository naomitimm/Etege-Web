import FooterSocials from "../footer-socials/footer-socials";
import Logo from "../logo/Logo";
import "./footer.css";
const Footer = () => {
	return (
		<footer>
			<Logo />
			<div className="third-party space">
				<a href="">Brands</a>
				<a href="">Media</a>
				<a href="">Partners</a>
			</div>
			<div className="company-focused">
				<a href="">About</a>
				<a href="">Contact</a>
				<a href="">Services</a>
				<a href="">FAQ</a>
				<a href="">Support</a>
			</div>
			<div className="socials">
				<FooterSocials />
			</div>
			<div className="grey">
				<a href="">Terms & Conditions</a>
				<a href="">Privacy Policy</a>
				<a href="">Copyright &copy;2023 Etege L.T.D. All rights reserved.</a>
			</div>
		</footer>
	);
};

export default Footer;
