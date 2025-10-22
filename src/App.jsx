import "./style.css";
import { useRef } from "react";
import Header from "./sections/header/Header.jsx";
import Services from "./sections/services/Services.jsx";
import Portfolio from "./sections/portfolio/Portfolio.jsx";
import About from "./sections/about/About.jsx";
import Contact from "./sections/contact-us/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";

function App() {
	const sectionsRef = {
		homeRef: useRef(null),
		servicesRef: useRef(null),
		PortRef: useRef(null),
		aboutRef: useRef(null),
		contactRef: useRef(null),
	};

	function scrollToSections(sectionId) {
		sectionsRef[sectionId]?.current.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		console.log(sectionsRef[sectionId]);
	}
	return (
		<main>
			<Header homeRef={sectionsRef.homeRef} scroll={scrollToSections} />
			<Services servicesRef={sectionsRef.servicesRef} />
			<Portfolio PortRef={sectionsRef.PortRef} />
			<About aboutRef={sectionsRef.aboutRef} />
			<Contact contactRef={sectionsRef.contactRef} />
			<Footer />
		</main>
	);
}

export default App;
