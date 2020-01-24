import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Head from "../components/Head"
import GlobalStyle from "../styles/GlobalStyle"
import HeroSection from "../components/HeroSection"
import About from "../components/About"
import WorkProcess from "../components/WorkProcess"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const theme = {
	transition: "all 0.2s linear",
	bg: "#663399",
	gradient: "linear-gradient(135deg,  #542c85 1%,#b06ab3 76%)",
	gradient_filter:
		"progid:DXImageTransform.Microsoft.gradient( startColorstr='#542c85', endColorstr='#b06ab3',GradientType=1 )",
}

const index = props => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<div>
				<Head title="Home" />
				<Header />
				<HeroSection />
				<About />
				<WorkProcess />
				<Skills />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default index
