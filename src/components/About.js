import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "./SectionTitle"
import AboutStyle from "../styles/AboutStyle"

const About = () => {
	const data = useStaticQuery(graphql`
		query {
			aboutImage: file(relativePath: { eq: "about_image.jpg" }) {
				childImageSharp {
					fixed(width: 300, height: 300) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	console.log(data)

	return (
		<AboutStyle>
			<div className="about-section" id="about">
				<div className="container">
					<SectionTitle title="About me" />
					<div className="row">
						<div className="col-md-6">
							<div className="about-content">
								<p>
									I'm Shaon Kabir, an <span>interactive</span> Front-end
									Developer. I'm used to develop <span>web application,</span>{" "}
									professional website that provide intuitive, pixel-perfect
									user interfaces(UI) with efficient and modern{" "}
									<span>backends.</span>
								</p>
								<p>
									I started my journey as a <span>self-taught</span> web
									designer right out of College when I first find resources to
									learn. Ever since I have fallen in <span>love</span> with{" "}
									<span>JavaScript</span> and love to do most of things using
									JavaScript. Nowadays, I spend most of my times taking my craft
									to the <span>next level</span>. I'd love to being{" "}
									<span>updated</span> with latest trends and{" "}
									<span>technology.</span>
								</p>
								<p>
									I'm <span>available</span> for any good job{" "}
									<span>opportunities.</span>
								</p>
							</div>
						</div>
						<div className="col-md-6 text-center">
							<div className="image-section">
								<div className="overlay">
									<Img fixed={data.aboutImage.childImageSharp.fixed} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AboutStyle>
	)
}

export default About
