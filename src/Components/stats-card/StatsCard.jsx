import { delay } from "motion";
import Icon from "../icon/Icon";
import { motion } from "motion/react";

const statsContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const statsItem = {
	hidden: { scale: 0, opacity: 0 },
	show: { scale: 1, opacity: 1 },
};

export default function StatsCard({ cards }) {
	return (
		<motion.section
			className="grid-container gap-x-6 gap-y-10 mb-20"
			variants={statsContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{cards.map((card) => (
				<Card card={card} key={card.descrip} />
			))}
		</motion.section>
	);
}
function Card({ card }) {
	return (
		<motion.section className="column-flex items-center" variants={statsItem}>
			<span className="primary-color text-5xl mb-4 inline-flex gap-x-2">
				{card.number}
				<section className="animate-wiggle">
					<Icon path={card.icon} color={card.iconColor} />
				</section>
			</span>
			<span className="block text-white capitalize">{card.descrip}</span>
		</motion.section>
	);
}
