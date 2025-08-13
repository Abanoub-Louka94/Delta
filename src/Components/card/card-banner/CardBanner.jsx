export default function CardBanner({ image }) {
	return (
		<section className="w-full h-[200px] overflow-hidden rounded-t-[10px]">
			<section className={`w-full h-full ${image} centered-background `}>
				<section className="h-full w-full bg-gradient-to-b from-black/50 via-black/30 to-black/40"></section>
			</section>
		</section>
	);
}
