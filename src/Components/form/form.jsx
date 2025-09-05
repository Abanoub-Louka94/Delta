export default function Form() {
	const options = [
		"select service",
		"custome furniture",
		"upholstery service",
		"curtains & blinds",
		"furniture paintwork",
		"textile sourcing",
	];
	return (
		<section>
			<form>
				<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<section>
						<label htmlFor="name" className="text-white block mb-2 capitalize">
							full name
						</label>
						<input
							placeholder="Enter your full name"
							type="text"
							id="name"
							className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white placeholder-[#888] focus:border-cyan-300 outline-none  my-transition"
						/>
					</section>
					<section>
						<label htmlFor="email" className="text-white block mb-2 capitalize">
							email address
						</label>
						<input
							placeholder="Enter your email"
							type="email"
							id="email"
							className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white placeholder-[#888] focus:border-cyan-300 outline-none  my-transition"
						/>
					</section>
					<section>
						<label htmlFor="phone" className="text-white block mb-2 capitalize">
							phone number
						</label>
						<input
							placeholder="+971 50 123 4567"
							type="tel"
							id="phone"
							className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white placeholder-[#888] focus:border-cyan-300 outline-none  my-transition"
						/>
					</section>
					<section>
						<label
							htmlFor="select"
							className="text-white block mb-2 capitalize"
						>
							service interest
						</label>
						<select
							id="select"
							className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white placeholder-[#888] focus:border-cyan-300 outline-none  my-transition"
						>
							{options.map((option) => (
								<option>{option}</option>
							))}
						</select>
					</section>
					<section className="md:col-span-2">
						<label
							htmlFor="message"
							className="text-white block mb-2 capitalize"
						>
							message
						</label>
						<textarea
							rows="4"
							placeholder="tell us about your project"
							id="message"
							className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#333] rounded-lg text-white placeholder-[#888] focus:border-cyan-300 outline-none resize-none my-transition"
						/>
					</section>
				</section>
			</form>
		</section>
	);
}
