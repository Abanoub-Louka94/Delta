import { motion } from "motion/react";
const container = {
	hidden: { opacity: 0, height: 0 },
	show: {
		opacity: 1,
		height: "auto",
		exit: { opacity: 0, height: 0 },
		transition: {
			type: "spring",
			staggerChildren: 0.2, // Delay between each child animation
		},
	},
};

const item = {
	hidden: { x: -5, opacity: 0 },
	show: { x: 0, opacity: 1 },
};
export default function FadeUp({ children }) {
	return <motion.section>{children}</motion.section>;
}
