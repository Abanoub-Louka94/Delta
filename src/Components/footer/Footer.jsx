import {
	cards,
	servicesList,
	companyList,
	socialList,
} from "./footer-js/footer";
import FooterCard from "../footer-card/FooterCard";
import FooterList from "../footer-list/FooterList";
import FooterForm from "../footer-form/footerForm";
import SocialLinks from "../social-links/SocialLinks";

export default function Footer() {
	return (
		<section>
			<section className="pt-16 w-full h-full bg-gradient-to-br from-[#04D9C4]/5 via-transparent to-[#04BFAD]/5 ">
				<section className="centered-container">
					<section className="grid-container gap-8">
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
						<section>
							<h3 className="capitalize text-white text-xl mb-6">
								our services
							</h3>
							<FooterList list={servicesList} />
						</section>
						<section>
							<h3 className="capitalize text-white text-xl mb-6">company</h3>
							<FooterList list={companyList} />
							<img
								src="../../assets/footer/social/twitter-svgrepo-com.png"
								alt=""
							/>
						</section>
						<section>
							<section className="mb-4">
								<h3 className="capitalize text-white text-xl mb-6">
									stay updated
								</h3>
								<p className="capitalize text-white text-sm ">
									subscribe to our newsletter for the latest furniture trends
									and exclusive offers.
								</p>
							</section>
							<section className="mb-6">
								<FooterForm />
							</section>
							<section>
								<SocialLinks social={socialList} />
							</section>
						</section>
					</section>
				</section>
				<section className="mt-20 border-t-cyan-300/70 px-6">
					<section className="centered-container">
						<section className="column-flex"></section>
					</section>
				</section>
			</section>
		</section>
	);
}
