import { motion } from "motion/react";
import Icon from "../icon/Icon";
import { item } from "../../sections/portfolio/portfolio-js/portfolio";

export default function StrengthsCard({ card }) {
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
