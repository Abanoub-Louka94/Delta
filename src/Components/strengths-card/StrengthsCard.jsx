import { motion } from "motion/react";
import Icon from "../icon/Icon";
import { strengthCards } from "../../sections/portfolio/portfolio-js/portfolio";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

export default function StrengthsCard() {
	return (
		<motion.section
			className="grid grid-cols-1 lg:grid-cols-3 gap-8"
			variants={container}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{strengthCards.map((card, index) => (
				<Card card={card} key={index} />
			))}
		</motion.section>
	);
}

function Card({ card }) {
	return (
		<motion.section
			className="rounded-[10px] group relative bg-[#1a1a1a]  p-8 flex flex-col justify-center items-center hover:scale-110 my-transition hover:-translate-y-2.5"
			variants={item}
		>
			<section className=" flex w-14 h-14 group-hover:rotate-360 rounded-full primary-bg-color justify-center items-center mb-4 my-transition">
				<Icon path={card.icon.shape} color={card.icon.color} />
			</section>
			<section className="text-white text-center">
				<h5 className="capitalize mb-5 group-hover:primary-color my-transition">
					{card.descrip.title}
				</h5>
				<p className="text-sm leading-relaxed">{card.descrip.description}</p>
			</section>
		</motion.section>
	);
}
