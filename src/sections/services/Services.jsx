import { motion } from "motion/react";
import CardDescrip from "../../Components/card-descrip/CardDescrip";
import Card from "../../Components/card/Card";
import CardBanner from "../../Components/card-banner/CardBanner";
import Icon from "../../Components/icon/Icon";
import List from "../../Components/card/list/List";
import Button from "../../Components/button/Button";

import {
	images,
	description,
	titles,
	lists,
	path,
	intro,
} from "./services-js/services";
import Intro from "../../Components/section-intro/Intro";

export default function Services() {
	return (
		<section
			id="services"
			className="py-20 bg-gradient-to-br from-[#04D9C4]/10 via-transparent to-[#04BFAD]/10"
		>
			<section className="centered-container">
				<Intro title={intro.title} description={intro.description}>
					<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
						<Button>
							<Icon path={path.path_6} color={path.color_primary} />
							<span className="capitalize primary-color">
								{intro.butt_title}
							</span>
							<Icon path={path.path_7} color={path.color_primary} />
						</Button>
					</section>
				</Intro>
				<section className="grid-container gap-x-6 gap-y-10">
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: "spring", duration: 2 }}
					>
						<Card>
							<CardBanner image={images.banner_1} />
							<section className="absolute top-[20px] right-[20px] flex w-fit rounded-full primary-bg-color justify-center items-center p-2">
								<Icon path={path.path_1} color={path.color_white} />
							</section>
							<section className="p-6">
								<section className="mb-4 xl:mb-9 2xl:mb-4">
									<CardDescrip
										title={titles.title_1}
										descrip={description.de_1}
									/>
								</section>
								<List list={lists.list_1} />
								<section className="rounded-[10px] primary-bg-color py-2">
									<Button>
										<span className="capitalize">view more</span>
										<Icon path={path.path_5} color={path.color_black} />
									</Button>
								</section>
							</section>
						</Card>
					</motion.section>
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: "spring", duration: 2, delay: 0.2 }}
					>
						<Card>
							<CardBanner image={images.banner_2} />
							<section className="absolute top-[20px] right-[20px] flex w-fit rounded-full primary-bg-color justify-center items-center p-2 ">
								<Icon path={path.path_2} color={path.color_white} />
							</section>
							<section className="p-6">
								<section className="mb-4 xl:mb-9 2xl:mb-4">
									<CardDescrip
										title={titles.title_2}
										descrip={description.de_2}
									/>
								</section>
								<List list={lists.list_2} />
								<section className="rounded-[10px] primary-bg-color py-2">
									<Button>
										<span className="capitalize">view more</span>
										<Icon path={path.path_5} color={path.color_black} />
									</Button>
								</section>
							</section>
						</Card>
					</motion.section>
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: "spring", duration: 2, delay: 0.4 }}
					>
						<Card>
							<CardBanner image={images.banner_3} />
							<section className="absolute top-[20px] right-[20px] flex w-fit rounded-full primary-bg-color justify-center items-center p-2 ">
								<Icon path={path.path_2} color={path.color_white} />
							</section>
							<section className="p-6">
								<section className="mb-4 lg:mb-9 2xl:mb-4">
									<CardDescrip
										title={titles.title_3}
										descrip={description.de_3}
									/>
								</section>
								<List list={lists.list_3} />
								<section className="rounded-[10px] primary-bg-color py-2">
									<Button>
										<span className="capitalize">view more</span>
										<Icon path={path.path_5} color={path.color_black} />
									</Button>
								</section>
							</section>
						</Card>
					</motion.section>
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ type: "spring", duration: 2, delay: 0.6 }}
					>
						<Card>
							<CardBanner image={images.banner_4} />
							<section className="absolute top-[20px] right-[20px] flex w-fit rounded-full primary-bg-color justify-center items-center p-2 ">
								<Icon path={path.path_4} color={path.color_white} />
							</section>
							<section className="p-6">
								<section className="mb-4 ">
									<CardDescrip
										title={titles.title_4}
										descrip={description.de_4}
									/>
								</section>

								<List list={lists.list_4} />
								<section className="rounded-[10px] primary-bg-color py-2">
									<Button>
										<span className="capitalize">view more</span>
										<Icon path={path.path_5} color={path.color_black} />
									</Button>
								</section>
							</section>
						</Card>
					</motion.section>
				</section>
				<section className=" border-2 border-cyan-300 px-8 py-2 w-fit mx-auto mt-16">
					<Button>
						<span className="capitalize primary-color text-sm">
							explore all services
						</span>
						<Icon path={path.path_5} color={path.color_primary} />
					</Button>
				</section>
			</section>
		</section>
	);
}
