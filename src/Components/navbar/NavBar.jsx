import { useState } from "react";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import Logo from "./logo/Logo";
import DeskTopLinks from "./desk-top-links/DeskTopLinks";
import Call from "./icons/call/Call";
import MobileLinks from "./mobile-links/MobileLinks";
import ToggleMenu from "./toggel-menu/ToggleMenu";
import { AnimatePresence } from "motion/react";
export default function NavBar() {
	const [isToggled, setIsToggled] = useState(false);

	function toggle() {
		setIsToggled((isToggled) => !isToggled);
	}
	return (
		<nav className="fixed w-full top-0 left-0 bg-black py-5 z-10">
			<section className="relative">
				<ScrollProgress />
				<section className="centered-container">
					<section className="flex-between">
						<Logo />
						<DeskTopLinks />
						<AnimatePresence>{isToggled && <MobileLinks />}</AnimatePresence>
						<section className="hidden lg:flex-between">
							<span>
								<Call />
							</span>
							<span className="text-white">+971 50 123 4567</span>
						</section>
						<ToggleMenu isToggeld={isToggled} toggle={toggle} />
					</section>
				</section>
			</section>
		</nav>
	);
}
