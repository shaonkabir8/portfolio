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
	color: {
		bg: "#111a28",
		border: "#00cf5d",
		green: "#0bda51",
		light: "#1d293a",
		gradient: "linear-gradient(315deg, #63d471 0%, #233329 74%)",
		gradient_bg: "#63d471",
	},
}

const Index = props => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Head title="Home" />
			<Header />
			<HeroSection />
			<About />
			<WorkProcess />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
		</ThemeProvider>
	)
}

export default Index
