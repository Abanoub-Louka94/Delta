import Button from "../../Components/button/Button";
import Intro from "../../Components/section-intro/Intro";
import Icon from "../../Components/icon/Icon";

import { intro, path } from "./about-js/about";

export default function About() {
	return (
		<section id="about" className="py-20">
			<section className="centered-container">
				<Intro title={intro.title} description={intro.description}>
					<section className="rounded-full mb-6 px-6 py-3 w-fit mx-auto bg-cyan-300/10 border border-cyan-300/20">
						<Button>
							<Icon path={path.path_1} color={path.color_primary} />
							<span className="capitalize primary-color">
								{intro.butt_title}
							</span>
						</Button>
					</section>
				</Intro>
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
					<section>
						<section className="flex flex-col md:flex-row mb-10">
							<section>
								<section className="rounded-full p-2 border border-[#04D9C4]/30">
									<section className="w-16 h-16 bg-gradient-to-br from-[#04D9C4]/20 to-[#04BFAD]/20 rounded-full flex items-center justify-center  border border-[#04D9C4]/30 hover:border-[#04D9C4]/60 my-transition">
										<Icon path={path.path_2} color={path.color_primary} />
									</section>
								</section>
							</section>
							<section>
								<p className="text-white">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
									ipsa aut corporis rerum cupiditate. Quos optio reiciendis
									eligendi, saepe rem aliquid dolorum autem, inventore, fugit
									quod laborum iste voluptate perferendis.
								</p>
							</section>
						</section>
					</section>
					<section></section>
				</section>
			</section>
		</section>
	);
}
