import { motion } from "motion/react";

export default function Card({ children }) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 1, delay: 0.5 }}
			className="rounded-[10px] relative flex flex-col"
		>
			{children}
		</motion.section>
	);
}
