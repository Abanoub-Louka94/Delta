import "./style.css";
import NavBar from "./Components/navbar/NavBar.jsx";
import { Header } from "./sections/header/Header.jsx";
import Services from "./sections/services/Services.jsx";
import Portfolio from "./sections/portfolio/Portfolio.jsx";

function App() {
	return (
		<main>
			<Header>
				<NavBar />
			</Header>
			<Services />
			<Portfolio />
		</main>
	);
}

export default App;
