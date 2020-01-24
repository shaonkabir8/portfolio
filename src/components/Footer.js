import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FooterStyle from "../styles/FooterStyle"

const Footer = () => {
	const data = useStaticQuery(graphql`
		query getAuthorName {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<FooterStyle>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p className="text-center">
								Created by {data.site.siteMetadata.author} with lot of{" "}
								<i className="fas fa-heart"></i> and{" "}
								<i className="fas fa-coffee"></i>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</FooterStyle>
	)
}

export default Footer
