import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import HeaderStyle from "../styles/HeaderStyle"

const Header = props => {
	return (
		<HeaderStyle>
			<Helmet>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossorigin="anonymous"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
				/>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Lora:400,700,700i|Merriweather:400,400i&display=swap&subset=latin-ext"
				/>
			</Helmet>
			<React.Fragment>
				<header className="header">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="logo">
									<Link to="/">
										<svg
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											x="0px"
											y="0px"
											viewBox="176.2 302.3 139.7 128.6"
											enableBackground="new 176.2 302.3 139.7 128.6"
											id="my-svg"
											width="50"
											height="50"
										>
											<g fill="#FFF">
												<path
													id="loader"
													d="M189,417.9v-40.5h13c3,18,15.8,28.4,33.1,28.4c12,0,19.1-5,19.1-12.5c0-10.4-9.8-12-27.1-16.1c-25.1-6-39.1-12.2-39.1-31.6c0-18.9,15-32.5,39.2-32.5c11.3,0,20.4,2.8,29.9,9.6l3.6-7.1h11.1v37.6H259c-2-17.1-13.2-26.8-30.8-26.8c-10.8,0-17.1,5-17.1,11.9c0,11.1,10.8,11.9,30.2,16.7c23.9,6,36.6,13,36.6,31.2c0,20.3-15.6,33.7-41.6,33.7c-12.3,0-22.5-3.3-32.1-10.4l-3.5,8.1L189,417.9L189,417.9z"
												/>
												<path d="M292.4,395.2c6.6,0,11.7,5.1,11.7,11.7s-5.1,11.7-11.7,13.7c-6.6,0-11.9-5.2-11.9-11.7S285.7,395.2,292.4,395.2z" />
											</g>
										</svg>
									</Link>
								</div>
							</div>
							<div className="col-md-8 text-right">
								<nav className="mainmenu">
									<ul>
										<li>
											<Link to="/">Home</Link>
										</li>
										<li>
											<Link to="#about">About</Link>
										</li>
										<li>
											<Link to="#skill">Skills</Link>
										</li>
										<li>
											<Link to="#portfolio">Portfolio</Link>
										</li>
										<li>
											<Link to="/blog">Blog</Link>
										</li>
										<li>
											<Link to="#contact">Contact</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</header>
			</React.Fragment>
		</HeaderStyle>
	)
}

export default Header
