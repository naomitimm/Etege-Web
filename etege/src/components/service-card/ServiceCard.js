import "./service.css";
import { serviceModel } from "./service-model";
import { useState } from "react";
import { Link } from "react-router-dom";
const ServiceCard = () => {
	return (
		<div className="explore-container dad">
			<h2>How can we help you?</h2>
			<div className="scroll">
				<div className="explore">
					{serviceModel.map((model) => (
						<>
							<Link to={`services/${model.serviceName}`}>
								<div className="explore-content" key={model.id}>
									<img
										src={model.image}
										alt={model.name}
										className="service-img"
									/>
									<div className="text">
										<h3>{model.serviceName}</h3>
										<p>{model.description}</p>
									</div>
								</div>
							</Link>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
