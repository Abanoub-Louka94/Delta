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
import Icon from "../icon/Icon";

export default function Footer() {
	return (
		<footer>
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
				<section className="mt-20 border-t border-cyan-300/70 py-6">
					<section className="centered-container">
						<section className="gird grid-cols-1 md:grid-cols-2">
							<section>
								<section className="flex-between gap-x-2">
									<section className="w-8 h-8 primary-bg-color rounded-full flex items-center justify-center">
										<Icon />
									</section>
									<section className="pr-4">
										<span className="primary-color capitalize font-semibold">
											delta furniture
										</span>
									</section>
									<section className="border-l border-cyan-300 pl-4">
										<span className="text-white capitalize">
											&copy; 2024 delta furniture. all rights reserved.
										</span>
									</section>
								</section>
							</section>
							<section className="flex-between gap-x-4">
								<section>
									<ul className="flex-between gap-x-4">
										<li>
											<a
												href="#"
												className="text-white capitalize hover:primary-color my-transition text-sm"
											>
												privacy policy
											</a>
										</li>
										<li>
											<a
												href="#"
												className="text-white capitalize hover:primary-color my-transition text-sm"
											>
												terms of service
											</a>
										</li>
									</ul>
								</section>
								<section>
									<section>
										<p className="text-white capitalize text-sm">
											made in
											<span className="primary-color font-semibold">
												{" "}
												dubai
											</span>
										</p>
									</section>
								</section>
							</section>
						</section>
					</section>
				</section>
			</section>
		</footer>
	);
}
