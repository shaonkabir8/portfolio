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
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="logo">
								<Link to="/">Shaon Kabir</Link>
							</div>
						</div>
						<div className="col-md-8">
							<nav className="mainmenu text-right">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/skills">Skills</Link>
									</li>
									<li>
										<Link to="/portfolio">Portfolio</Link>
									</li>
									<li>
										<Link to="/blog">Blog</Link>
									</li>
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</HeaderStyle>
	)
}

export default Header
