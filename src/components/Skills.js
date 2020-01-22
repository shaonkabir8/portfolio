import React from "react"
import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import SkillBar from "./SkillBar"
const SkillStyle = styled.div``

const Skills = () => {
	return (
		<SkillStyle>
			<div className="skill-section" id="skill">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<SectionTitle title="Skills" />
							<div className="animatedSkill">
								<SkillBar />
							</div>
						</div>
						<div className="col-md-6">
							<SectionTitle title="Certifications" />
							<h3>Certifications Section will be added later</h3>
						</div>
					</div>
				</div>
			</div>
		</SkillStyle>
	)
}

export default Skills
