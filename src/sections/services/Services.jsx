import Card from "../../Components/card/Card";
import CardBanner from "../../Components/card/card-banner/CardBanner";

export default function Services() {
	const images = {
		banner_1: "url(/src/assets/card/card-banner/1.jpeg)",
		banner_2: "url(/src/assets/card/card-banner/2.jpeg)",
		banner_3: "url(/src/assets/card/card-banner/3.jpeg)",
	};

	return (
		<section className="py-20 bg-gradient-to-br from-[#04D9C4]/10 via-transparent to-[#04BFAD]/10">
			<section className="centered-container">
				<section className="cards grid grid-cols-1 md:grid-cols-4 gap-6">
					<Card>
						<CardBanner image={images.banner_1} />
					</Card>
					<Card>
						<CardBanner image={images.banner_2} />
					</Card>
					<Card>
						<CardBanner image={images.banner_3} />
					</Card>
				</section>
			</section>
		</section>
	);
}
