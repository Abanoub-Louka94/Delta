import Button from "../../Components/button/Button";
import Intro from "../../Components/section-intro/Intro";
import Icon from "../../Components/icon/Icon";

import { intro, path, cards } from "./about-js/about";
import AboutCard from "../../Components/about-card/AboutCard";

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
						<AboutCard
							path={path.path_2}
							color={path.color_primary}
							title={cards.card_1.title}
							title_2={cards.card_1.title_2}
							description={cards.card_1.description}
						/>
						<AboutCard
							path={path.path_3}
							color={path.color_primary}
							title={cards.card_2.title}
							title_2={cards.card_2.title_2}
							description={cards.card_2.description}
						/>
						<AboutCard
							path={path.path_4}
							color={path.color_primary}
							title={cards.card_3.title}
							title_2={cards.card_3.title_2}
							description={cards.card_3.description}
						/>
					</section>
					<section></section>
				</section>
			</section>
		</section>
	);
}
