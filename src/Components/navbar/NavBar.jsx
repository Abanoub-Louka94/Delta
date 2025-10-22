import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import ScrollProgress from "../ScrollProgress/ScrollProgress";
import Logo from "./logo/Logo";
import DeskTopLinks from "./desk-top-links/DeskTopLinks";
import Call from "./icons/call/Call";
import MobileLinks from "./mobile-links/MobileLinks";
import ToggleMenu from "./toggel-menu/ToggleMenu";
import { AnimatePresence } from "motion/react";
import { container } from "./nav-js/nav";

export default function NavBar({ scroll }) {
	const [isToggled, setIsToggled] = useState(false);
	const { scrollYProgress } = useScroll();
	const backgroundColor = useTransform(
		scrollYProgress,
		[0, 1],
		["transparent", "#000000"]
	);

	function toggle() {
		setIsToggled((isToggled) => !isToggled);
	}
	return (
		<motion.nav
			style={{ backgroundColor }}
			className="fixed w-full top-0 left-0 py-5 z-10"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<section className="relative">
				<ScrollProgress />
				<section className="centered-container">
					<section className="flex-between">
						<Logo />
						<DeskTopLinks scroll={scroll} />
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
		</motion.nav>
	);
}
