import React from "react"
import styled from "styled-components"
import SectionTitle from "./SectionTitle"
import SkillBar from "./SkillBar"
import Certifications from "./Certifications"
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
							<Certifications />
						</div>
					</div>
				</div>
			</div>
		</SkillStyle>
	)
}

export default Skills
