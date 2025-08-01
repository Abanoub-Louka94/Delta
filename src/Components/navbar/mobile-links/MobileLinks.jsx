import { motion } from "motion/react";
import Call from "../icons/call/Call";
export default function MobileLinks() {
	return (
		<motion.section
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: "auto" }}
			exit={{ opacity: 0, height: 0 }}
			transition={{ type: "spring" }}
			className="w-full bg-black top-[60px] left-0 absolute md:hidden"
		>
			<motion.ul
				variants={{
					visible: { transition: { staggerChildren: 1 } },
				}}
			>
				<List name="home" />
				<List name="services" />
				<List name="portfolio" />
				<List name="about" />
				<List name="contact" />
			</motion.ul>
			<motion.section
				variants={{
					visible: { x: 0, opacity: 1 },
					hidden: { x: -5, opacity: 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ type: "spring" }}
				exit="hidden"
				className="border-t border-cyan-300/30 flex w-[90%] mx-auto py-4"
			>
				<span>
					<Call />
				</span>
				<span className="text-white">+971 50 123 4567</span>
			</motion.section>
		</motion.section>
	);
}
function List({ name }) {
	return (
		<motion.li
			variants={{
				visible: { x: 0, opacity: 1 },
				hidden: { x: -5, opacity: 0 },
			}}
			initial="hidden"
			animate="visible"
			transition={{ type: "spring" }}
			exit="hidden"
			className="w-[90%] mx-auto"
		>
			<a className="block capitalize text-white py-3" href="#">
				{name}
			</a>
		</motion.li>
	);
}
