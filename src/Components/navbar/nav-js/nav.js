export const container = {
	hidden: { opacity: 0, y: -50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			delay: 0.5,
		},
	},
};

export const item = {
	hidden: { x: -5, opacity: 0 },
	show: { x: 0, opacity: 1 },
};
