import React from "react"
import SectionTitle from "./SectionTitle"
import WorkProcessStyle from "../styles/WorkProcessStyle"

const WorkProcess = props => {
	return (
		<WorkProcessStyle>
			<section id="work-process" className="bg-gray-dark">
				<div className="container">
					<SectionTitle title="Work Process" />
					<div className="row work-process">
						<div className="col-12 col-md-2 item">
							<div className="item-content mt-0">
								<i className="far fa-lightbulb icon icon-block icon-medium rounded"></i>
								<i className="fas fa-long-arrow-alt-down icon icon-arrow icon-medium text-white"></i>
								<span className="dot dot-start bg-gray"></span>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								1. Idea
							</span>
						</div>

						<div className="col-12 col-md-2 item">
							<div className="item-content">
								<i className="fas fa-pencil-alt icon icon-block icon-medium rounded"></i>
								<i className="fas fa-long-arrow-alt-up icon icon-arrow icon-medium text-white"></i>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								2. Sketch
							</span>
						</div>

						<div className="col-12 col-md-2 item">
							<div className="item-content mt-0">
								<i className="fas fa-desktop icon icon-block icon-medium rounded"></i>
								<i className="fas fa-long-arrow-alt-down icon icon-arrow icon-medium  text-white"></i>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								3. Design
							</span>
						</div>

						<div className="col-12 col-md-2 item">
							<div className="item-content">
								<i className="fas fa-code icon icon-block icon-medium rounded"></i>
								<i className="fas fa-long-arrow-alt-up icon icon-arrow icon-medium text-white"></i>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								4. Develop
							</span>
						</div>

						<div className="col-12 col-md-2 item">
							<div className="item-content mt-0">
								<i className="fas fa-bug icon icon-block icon-medium rounded"></i>
								<i className="fas fa-long-arrow-alt-down icon icon-arrow icon-medium text-white"></i>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								5. Test
							</span>
						</div>

						<div className="col-12 col-md-2 item">
							<div className="item-content">
								<i className="fas fa-rocket icon icon-block icon-medium rounded"></i>
								<span className="dot dot-end bg-gray"></span>
							</div>

							<span className="font-alt font-w-600 letter-spacing-1 text-medium text-uppercase text-white">
								6. Launch
							</span>
						</div>
					</div>
				</div>
			</section>
		</WorkProcessStyle>
	)
}

export default WorkProcess
