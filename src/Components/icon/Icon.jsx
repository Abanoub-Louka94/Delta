export default function Icon({ path }) {
	return (
		<section className="flex w-fit rounded-full praimary-bg-color justify-center items-center p-2 ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#D9D9D9"
			>
				<path d={path} />
			</svg>
		</section>
	);
}
