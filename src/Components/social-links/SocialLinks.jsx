export default function SocialLinks({ social }) {
	return (
		<ul className="flex items-center gap-x-3">
			{social.map((social) => (
				<li className="w-fit" key={social}>
					<a
						href="#"
						className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center  hover:bg-cyan-300/20 my-transition"
					>
						<img src={social} alt="social" className="block w-[20px]" />
					</a>
				</li>
			))}
		</ul>
	);
}
