import InfoContent from "../../components/info-content/InfoContent";
import "./about.css";
const About = () => {
	return (
		<div className="about">
			<div className="main-content">
				<div className="slogan">
					<img className="main" src="" alt="" />
					<div className="about-text">
						<h2>
							There can be life after breast cancer.
							<br />
							The prerequisite is early detection.
						</h2>
						<button className="action-btn">Explore Now</button>
					</div>
				</div>
				<div className="about-us">
					<div className="about-text">
						<h2 className="width">About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							maxime mollitia aliquam aperiam facilis id tempora ex voluptas
							alias dolore! Repellat voluptas nam iste deserunt rerum?
							Accusantium, expedita? Voluptas, odit earum deleniti repellendus
							molestiae dolorem vero? Cupiditate, repellat sequi! Voluptas?
						</p>
					</div>
					<img className="main" src="" alt="" />
				</div>
			</div>
			<div className="company">
				<InfoContent />
			</div>
		</div>
	);
};

export default About;
