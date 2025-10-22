import "./style.css";
import { useRef, useState } from "react";
import Header from "./sections/header/Header.jsx";
import Services from "./sections/services/Services.jsx";
import Portfolio from "./sections/portfolio/Portfolio.jsx";
import About from "./sections/about/About.jsx";
import Contact from "./sections/contact-us/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";

function App() {
	const [activeSection, setActiveSection] = useState("home");
	const home = useRef(null);
	const services = useRef(null);
	const portfolio = useRef(null);
	const about = useRef(null);
	const contact = useRef(null);
	const navLinks = [
		{
			id: "home",
			ref: home,
		},
		{
			id: "services",
			ref: services,
		},
		{
			id: "portfolio",
			ref: portfolio,
		},
		{
			id: "about",
			ref: about,
		},
		{
			id: "contact",
			ref: contact,
		},
	];

	function scrollToSections(ref, sectionName) {
		setActiveSection(sectionName);
		ref.current?.scrollIntoView({
			behavior: "smooth",
		});
		console.log("scrolling to", sectionName);
		console.log("Ref:", sectionName);
		console.log("Element:", sectionName?.current);
	}
	return (
		<main>
			<Header
				homeRef={home}
				scroll={scrollToSections}
				activeSection={activeSection}
				navLinks={navLinks}
			/>
			<Services servicesRef={services} />
			<Portfolio PortRef={portfolio} />
			<About aboutRef={about} />
			<Contact contactRef={contact} />
			<Footer />
		</main>
	);
}

export default App;
