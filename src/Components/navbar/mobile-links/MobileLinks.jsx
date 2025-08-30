import { motion } from "motion/react";
import Call from "../icons/call/Call";
const links = ["home", "services", "portfolio", "about", "contact"];
const container = {
	hidden: { opacity: 0, height: 0 },
	show: {
		opacity: 1,
		height: "auto",
		exit: { opacity: 0, height: 0 },
		transition: {
			staggerChildren: 0.2, // Delay between each child animation
		},
	},
};

const item = {
	hidden: { x: -5, opacity: 0 },
	show: { x: 0, opacity: 1 },
};

export default function MobileLinks() {
	return (
		<motion.ul
			className="w-full bg-black top-[60px] left-0 absolute md:hidden"
			variants={container}
			initial="hidden"
			animate="show"
			exit="hidden"
		>
			{links.map((links) => (
				<motion.li
					className="w-[90%] mx-auto"
					key={links}
					link={links}
					variants={item}
					transition={{ type: "tween" }}
				>
					<a
						className="block capitalize text-white py-3 my-transition hover:primary-color"
						href="#"
					>
						{links}
					</a>
				</motion.li>
			))}
			<motion.section
				variants={item}
				className="border-t border-cyan-300/30 flex w-[90%] mx-auto py-4"
			>
				<span>
					<Call />
				</span>
				<span className="text-white">+971 50 123 4567</span>
			</motion.section>
		</motion.ul>
	);
}
