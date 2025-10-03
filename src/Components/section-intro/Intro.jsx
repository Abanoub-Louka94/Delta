import { motion } from "motion/react";
import { rotate, container, item } from "./intro-js/intro";
export default function Intro({ title, description, children }) {
	return (
		<section className="text-center mb-16 ">
			<motion.section
				variants={rotate}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				{children}
			</motion.section>
			<motion.section
				className="overflow-hidden"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			>
				<motion.section
					variants={item}
					transition={{ duration: 0.7, type: "spring" }}
				>
					<h2 className="mb-6 text-4xl md:text-6xl primary-color capitalize tracking-[2px]">
						{title}
					</h2>
				</motion.section>
				<motion.section
					variants={item}
					transition={{ duration: 0.7, type: "spring" }}
				>
					<p className="text-white">{description}</p>
				</motion.section>
			</motion.section>
		</section>
	);
}
