import React, { useState, useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Spinner from "../components/Spinner"
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
	const [loading, setLoading] = useState(true)

	let spniner = (
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
	)

	// if (loading) {
	// 	spniner = <Spinner />
	// }

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	})

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{spniner}
		</ThemeProvider>
	)
}

export default Index
