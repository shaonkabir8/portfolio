import React from "react"
import SectionTitle from "./SectionTitle"
import AboutCard from "./AboutCard"
import AboutPageStyle from "../styles/AboutStyle"

const About = () => {
	return (
		<AboutStyle>
			<Header />
			<div clssName="about-section section-padding">
				<div className="container">
					<SectionTitle title="About me" />
					<div className="row">
						<div className="col-md-6 image-section">
							<div className="about-image">
								<img
									src="https://i.postimg.cc/4dPBXcLR/myPhoto.png"
									alt="Photo of myself"
								/>
							</div>
							<div className="hover">
								<h3>Hello, I'm Shaon kabir</h3>
								<p>
									JavaScript lover and dedicated Frontend developer with more
									than two years of experiences of building website in this
									recruiting industry.
								</p>
								<p>
									I'm quite Proﬁcient in HTML,CSS, JavaScript; plus modern
									libraries and frameworks. Obviously I'm passionate about
									usability and possess working knowledge of Adobe Photoshop.
								</p>
								<p>
									I’d love to develop my skills being updated according to
									trends and Technology
								</p>
							</div>
						</div>
						<div className="col-md-6">
							<AboutCard />
						</div>
					</div>
				</div>
			</div>
		</AboutStyle>
	)
}

export default About
