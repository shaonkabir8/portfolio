import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PortfolioCardStyle from "../styles/PortfolioCardStyle"

const PortfolioCard = props => {
	// grab project images to pass them as prop
	const data = useStaticQuery(graphql`
		query myImgQuery {
			car: file(relativePath: { eq: "car.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			city: file(relativePath: { eq: "chinaCity.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
			snowfall: file(relativePath: { eq: "snowfall.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 325) {
						...GatsbyImageSharpFluid
					}
				}
			}
			building: file(relativePath: { eq: "building.jpg" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	return (
		<PortfolioCardStyle>
			<div className={props.className}>
				<div className="card">
					<Img
						className="card-img-top"
						fluid={props.imgSrc}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">{props.desc}</p>
						<p>{props.date}</p>
					</div>
					<div className="card-hover">
						<h5>{props.title}</h5>
						<p>
							Made with <i className="fas fa-heart" /> and{" "}
							<i className="fas fa-coffee" />
						</p>
						<mark className="mark">Stack &amp; Tools :)</mark>
						<div className="stack-image">
							<ul>
								<li>
									<i className="fab fa-html5"></i>
									<span>HTML</span>
								</li>
								<li>
									<i className="fab fa-css3"></i>
									<span>CSS</span>
								</li>
								<li>
									<i className="fab fa-js"></i>
									<span>JavaScript</span>
								</li>
								<li>
									<i className="fab fa-bootstrap"></i>
									<span>Bootstrap</span>
								</li>
								<li>
									<i className="fab fa-font-awesome"></i>
									<span>FontAwesome</span>
								</li>
							</ul>
						</div>
						<hr />
						<a href={props.githubLink} className=" boxed-btn">
							View Code
							<i className="fab fa-github"></i>
						</a>
						<a href={props.liveDemo} target="_blank" className="boxed-btn">
							Live Demo
							<i className="fas fa-link"></i>
						</a>
					</div>
				</div>
			</div>
		</PortfolioCardStyle>
	)
}

export default PortfolioCard