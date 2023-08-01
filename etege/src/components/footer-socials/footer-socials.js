import "./footer-socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faPinterest,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const FooterSocials = () => {
	return (
		<div className="footer-social-media">
			<FontAwesomeIcon icon={faFacebookF} />
			<FontAwesomeIcon icon={faTwitter} />
			<FontAwesomeIcon icon={faPinterest} />
			<FontAwesomeIcon icon={faLinkedin} />
			<FontAwesomeIcon icon={faInstagram} />
		</div>
	);
};

export default FooterSocials;
