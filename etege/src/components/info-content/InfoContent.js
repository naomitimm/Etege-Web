import { infoContentModel } from "./info-content-model";
import "./info-content.css";
const InfoContent = () => {
	return (
		<div className="info">
			<div className="info-container">
				{infoContentModel.map((model) => (
					<>
						<div className="info-content" key={model.id}>
							<div className="row">
								<img src={model.image} alt={model.name} />
								<h4>{model.title}</h4>
							</div>
							<p className="col">{model.description}</p>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default InfoContent;
