import "./service-detail.css";
import ImageGrid from "../../components/image-grid/ImageGrid";
import { useParams } from "react-router-dom";
// import {
// 	faPersonHiking,
// 	faBowlFood,
// 	faBed,
// } from "@fortawesome/free-solid-svg-icons";
import Essentials from "../../components/essentials/Essentials";
const ServiceDetails = () => {
	const { serviceName } = useParams();
	return (
		<div className="service-detail">
			<div className="service-intro">
				<h1 className="marg">
					<span>Learn About</span> {serviceName}
				</h1>
			</div>

			<ImageGrid />
			<h3 className="specialh3">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe autem
				vero est labore dicta ea tempora harum eum accusantium expedita! Lorem
				ipsum dolor sit amet consectetur, adipisicing elit. Cumque excepturi id
				doloribus sunt, earum doloremque nisi facilis reiciendis eum dolor.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae vero
				architecto ducimus excepturi sit porro illum repellendus amet vel!
			</h3>
			<div className="essentials">
				<h2 className="marg">
					<span>Essentials In</span> {serviceName}
				</h2>
				{/* <Essentials
					title="Where to stay?"
					icon={<FontAwesomeIcon icon={faBed} />}
				/>
				<Essentials
					title="What to do?"
					icon={<FontAwesomeIcon icon={faPersonHiking} />}
				/>

				<Essentials
					title="Where to eat?"
					icon={<FontAwesomeIcon icon={faBowlFood} />}
				/> */}
			</div>
		</div>
	);
};

export default ServiceDetails;
