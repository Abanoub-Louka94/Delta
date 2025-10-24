import Icon from "../icon/Icon";
import { motion } from "motion/react";
import {
	statsContainer,
	statsItem,
} from "../../sections/portfolio/portfolio-js/portfolio";

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
