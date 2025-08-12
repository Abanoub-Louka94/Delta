export default function CardBanner({ image }) {
	return (
		<section className="w-full h-[300px] overflow-hidden ">
			<section className={`w-full h-full bg-[${image}]`}></section>
		</section>
	);
}
