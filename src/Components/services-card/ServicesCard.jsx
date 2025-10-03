import { motion } from "motion/react";
import List from "./list/List";
import CardBanner from "../card-banner/CardBanner";
import CardDescrip from "../card-descrip/CardDescrip";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import { path, item } from "../../sections/services/services-js/services";
export default function ServicesCard({ card }) {
	return (
		<motion.section
			className="rounded-[10px] relative border hover:border-cyan-300 my-transition"
			variants={item}
		>
			<CardBanner image={card.banner} />
			<section className="absolute top-[20px] right-[20px] flex w-fit rounded-full primary-bg-color justify-center items-center p-2 ">
				<Icon path={card.icon.shape} color={card.icon.color} />
			</section>
			<section className="p-6">
				<section className="mb-4 ">
					<CardDescrip
						title={card.descrip.title}
						descrip={card.descrip.description}
					/>
				</section>

				<List list={card.list} />
				<section className="rounded-[10px] primary-bg-color py-2">
					<Button>
						<span className="capitalize">view more</span>
						<Icon path={path.path_3} color={path.color_black} />
					</Button>
				</section>
			</section>
		</motion.section>
	);
}
