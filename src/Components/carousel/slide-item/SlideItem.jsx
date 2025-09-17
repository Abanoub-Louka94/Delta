import Icon from "../../icon/Icon";
export default function SlideItem({ sliders }) {
	return (
		<>
			{sliders.map((slider) => (
				<section
					key={slider.name}
					className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 border border-cyan-300/10 hover:border-cyan-300/30 my-transition mx-4"
				>
					<section className="flex justify-center items-center">
						<Icon path={slider.qouteIcon} color={slider.iconColor} />
					</section>
					<section className="flex justify-center items-center">
						{slider.starsIcon.map((star) => (
							<Icon path={star.path} color={slider.iconColor} key={star.id} />
						))}
					</section>
				</section>
			))}
		</>
	);
}
