import "./style.css";
import NavBar from "./Components/navbar/NavBar.jsx";
import { Header } from "./sections/header/Header.jsx";

function App() {
	return (
		<main>
			<Header>
				<NavBar />
			</Header>
		</main>
	);
}

export default App;
