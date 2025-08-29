export default function FullBanner({ image }) {
	return (
		<section className="w-full h-full overflow-hidden rounded-[10px]">
			<section className={`w-full h-full ${image} centered-background `}>
				<section className="h-full w-full bg-gradient-to-b from-black/30 via-black/20 to-black/30"></section>
			</section>
		</section>
	);
}
