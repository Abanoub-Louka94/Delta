import Button from "../../Components/button/Button";
import Intro from "../../Components/section-intro/Intro";
import Icon from "../../Components/icon/Icon";
import Footer from "../../Components/footer/Footer";
import { intro, path } from "./contact-us-js/contact";
import Form from "../../Components/form/form";

export default function Contact() {
	return (
		<section id="contact" className="py-20">
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
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
					<section className="bg-[#1a1a1a] rounded-2xl p-8 border border-cyan-300/10">
						<h3 className="capitalize primary-color text-2xl mb-6">
							send us a meesage
						</h3>
						<Form />
					</section>
				</section>
			</section>
			<Footer />
		</section>
	);
}
