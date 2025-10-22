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
		home: useRef(null),
		services: useRef(null),
		portfolio: useRef(null),
		about: useRef(null),
		contact: useRef(null),
	};

	function scrollToSections(sectionId) {
		sectionsRef[sectionId].current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
		console.log("scrolling to", sectionId);
		console.log("Ref:", sectionsRef[sectionId]);
		console.log("Element:", sectionsRef[sectionId]?.current);
	}
	return (
		<main>
			<Header homeRef={sectionsRef.home} scroll={scrollToSections} />
			<Services servicesRef={sectionsRef.services} />
			<Portfolio PortRef={sectionsRef.portfolio} />
			<About aboutRef={sectionsRef.about} />
			<Contact contactRef={sectionsRef.contact} />
			<Footer />
		</main>
	);
}

export default App;
