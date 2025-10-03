export const rotate = {
	hidden: { scale: 0, rotate: 180 },
	show: {
		scale: 1,
		rotate: 0,

		transition: {
			delay: 0.3,
			type: "spring",
		},
	},
};

export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			type: "spring",
			staggerChildren: 0.5, // Delay between each child animation
		},
	},
};

export const item = {
	hidden: { y: 20, opacity: 0 },
	show: { y: 0, opacity: 1 },
};
