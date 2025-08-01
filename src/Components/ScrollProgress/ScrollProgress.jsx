import { motion, useSpring, useScroll } from "motion/react";

export default function ScrollLinked() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});
	return (
		<motion.div
			style={{
				scaleX,
				top: 0,
				left: 0,
				right: 0,
				originX: 0,
				height: 4,
				position: "fixed",
				backgroundColor: "oklch(86.5% 0.127 207.078)",
			}}
		></motion.div>
	);
}
