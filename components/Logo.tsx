const Logo = ({ color = "#ba9467" }: { color: string }) => {
	return (
		// <div className="flex justify-center mt-20 mb-4">
		<div className="flex justify-center mb-4">
			<div
				style={{
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-5xl"
			>
				Grove
			</div>
			<div
				style={{
					color: color,
					letterSpacing: "-.1em",
				}}
				className="font-latienne-pro text-white font-bold text-5xl"
			>
				f
			</div>
			<div
				style={{
					paddingTop: 1,
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-5xl "
			>
				i
			</div>
			<div
				style={{
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-5xl "
			>
				lm
			</div>
		</div>
	);
};

export default Logo;
