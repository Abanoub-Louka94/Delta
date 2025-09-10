export default function Social({ path, color }) {
	return (
		<svg
			width="24px"
			height="24px"
			viewBox="0 0 192 192"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
		>
			<path stroke={color} stroke-width="12" d={path} />
		</svg>
	);
}
