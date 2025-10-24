import { motion } from "motion/react";
import Button from "../button/Button";
import Icon from "../../Components/icon/Icon";
const portfolioContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const portfolioItem = {
	hidden: { y: 10, opacity: 0 },
	show: { y: 0, opacity: 1 },
};

export default function PortfolioCard({ cards }) {
	return (
		<motion.section
			className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-6 mb-20"
			variants={portfolioContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
		>
			{cards.map((card) => (
				<Card card={card} key={card.head} />
			))}
		</motion.section>
	);
}

function Card({ card }) {
	return (
		<motion.section
			className="bg-[#1a1a1a] p-6 rounded-xl border border-cyan-300/20 hover:border-cyan-300/40 my-transition h-full"
			variants={portfolioItem}
		>
			<section className="flex gap-x-5 mb-4">
				<section className=" flex w-12 h-12  rounded-full primary-bg-color justify-center items-center">
					<Icon path={card.icon} color={card.iconColor} />
				</section>
				<section>
					<h4 className="text-lg primary-color mb-1 capitalize">{card.head}</h4>
					<span className="text-white text-xs block capitalize">
						{card.subHead}
					</span>
				</section>
			</section>
			<p className="text-white text-sm mb-4 leading-relaxed capitalize">
				{card.descrip}
			</p>
			<section className="rounded-[10px] border border-cyan-300  py-2 ">
				<Button>
					<Icon path={card.buttIcon} color={card.buttonColorIcon} />
					<span className="capitalize primary-color">download profile</span>
				</Button>
			</section>
		</motion.section>
	);
}
