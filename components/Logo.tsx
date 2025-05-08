import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Logo = ({ color = "#ba9467" }: { color: string }) => {
	const router = useRouter();

	return (
		<div className="flex justify-center items-center mb-4 mt-4">
			<div
				// style={{
				// 	color: color,
				// }}
				className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl capitalize text-orange"
			>
				Grove
			</div>
			<div
				style={{
					// color: color,
					letterSpacing: "-.1em",
				}}
				className="font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase"
			>
				f
			</div>
			<div
				style={{
					paddingTop: 1,
					// color: color,
				}}
				className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase"
			>
				i
			</div>
			<div className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase">
				lm
			</div>
			<img src="../static/handsWhite.png" width="80px" />
		</div>
	);
};

export default Logo;
