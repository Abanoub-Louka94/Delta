import Icon from "../icon/Icon";
export default function FooterCard({ card }) {
	return (
		<section className=" flex items-start gap-3">
			<section>
				<Icon path={card.icon} color={card.color_primary} />
			</section>

			<section>
				<span className="capitalize text-white block font-medium">
					{card.title}
				</span>
				<span className="text-white/60 text-sm block">{card.info}</span>
			</section>
		</section>
	);
}
