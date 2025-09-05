export default function ContactCards() {
	const cards = [
		(card_1 = {
			icon: "icon1",
			title: "teile1",
			info: "info-2",
		}),
		(card_2 = {
			icon: "icon2",
			title: "teile2",
			info: "info-2",
		}),
	];
	return (
		<section>
			{cards.map((card) => (
				<section>{card.icon}</section>
			))}
		</section>
	);
}
