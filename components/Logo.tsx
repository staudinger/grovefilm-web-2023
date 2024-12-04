const Logo = ({ color = "#ba9467" }: { color: string }) => {
	return (
		<div className="flex justify-center items-center mb-4 mt-7">
			<div
				style={{
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-3xl xl:text-5xl capitalize"
			>
				Grove
			</div>
			<div
				style={{
					color: color,
					letterSpacing: "-.1em",
				}}
				className="font-latienne-pro text-white font-bold text-3xl xl:text-5xl"
			>
				f
			</div>
			<div
				style={{
					paddingTop: 1,
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-3xl xl:text-5xl"
			>
				i
			</div>
			<div
				style={{
					color: color,
				}}
				className="tracking-tighter font-latienne-pro text-white font-bold text-3xl xl:text-5xl"
			>
				lm
			</div>
		</div>
	);
};

export default Logo;
