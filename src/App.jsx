import "./style.css";
import Header from "./sections/header/Header.jsx";
import Services from "./sections/services/Services.jsx";
import Portfolio from "./sections/portfolio/Portfolio.jsx";
import About from "./sections/about/About.jsx";
import Contact from "./sections/contact-us/Contact.jsx";
import Footer from "./Components/footer/Footer.jsx";

function App() {
	return (
		<main>
			<Header />
			<Services />
			<Portfolio />
			<About />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
