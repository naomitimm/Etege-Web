import pink from "../../assets/pink.svg";
import ImageGrid from "../../components/image-grid/ImageGrid";
import ServiceCard from "../../components/service-card/ServiceCard";
import "./home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="main-landing">
				<div className="landing">
					<div className="textual">
						<div className="text">
							<h1>Lorem ipsum dolor sit amet consectetur</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
								nemo quibusdam laudantium tempore sit eius, autem illum quos
								placeat natus qui ut alias nisi perferendis. Et voluptas
								deserunt quia aperiam
							</p>
						</div>
						<button className="action-btn">Explore Now</button>
					</div>
					<div className="graphical">
						<img src={pink} alt="" />
					</div>
				</div>
			</div>
			<ServiceCard />
		</div>
	);
};

export default Home;
