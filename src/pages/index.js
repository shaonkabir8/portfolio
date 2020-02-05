import React from "react"
import { ThemeProvider } from "styled-components"
import Head from "../components/Head"
import GlobalStyle from "../styles/GlobalStyle"
import HeroSection from "../components/HeroSection"
import About from "../components/About"
import WorkProcess from "../components/WorkProcess"
import Skills from "../components/Skills"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Layout from "../components/Layout"

const theme = {
	transition: "all 0.2s linear",
	color: {
		bg: "#111a28",
		border: "#00cf5d",
		green: "#0bda51",
		light: "#1d293a",
		// light: rgb(23, 42, 69);
		gradient: "linear-gradient(315deg, #63d471 0%, #233329 74%)",
		gradient_bg: "#63d471",
	},
}

const Index = props => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<GlobalStyle />
				<Head title="Shaon Kabir" />
				<HeroSection />
				<About />
				<WorkProcess />
				<Skills />
				<Portfolio />
				<Contact />
			</Layout>
		</ThemeProvider>
	)
}

export default Index
