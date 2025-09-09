import { cards } from "./footer-js/footer";
import FooterCard from "../footer-card/FooterCard";

export default function Footer() {
	return (
		<section>
			<section className="pt-16 w-full h-full bg-gradient-to-br from-[#04D9C4]/5 via-transparent to-[#04BFAD]/5">
				<section className="centered-container">
					<section className="grid-container">
						<section>
							<section className="mb-6">
								<h2 className="text-3xl capitalize primary-color mb-2">
									delta furniture
								</h2>
								<p className="text-white/80  font-sans">
									Crafting luxury furniture with precision, care, and
									uncompromising quality since our inception.
								</p>
							</section>
							<section className="flex flex-col gap-y-4">
								{cards.map((card) => (
									<FooterCard card={card} key={card.title} />
								))}
							</section>
						</section>
					</section>
				</section>
			</section>
			<section></section>
		</section>
	);
}
