import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Logo = ({ color = "#ba9467" }: { color: string }) => {
	const router = useRouter();

	return (
		<div className="flex justify-center items-center mb-4 mt-4">
			<div
				style={{ textShadow: "2px 1px .5px #D11E06" }}
				className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl capitalize text-orange"
			>
				Grove
			</div>
			<div
				style={{
					textShadow: "2px 1px .5px #D11E06",
					letterSpacing: "-.1em",
				}}
				className="font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase"
			>
				f
			</div>
			<div
				style={{
					paddingTop: 1,
					textShadow: "2px 1px .5px #D11E06",
				}}
				className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase"
			>
				i
			</div>
			<div
				className="tracking-tighter font-latienne-pro font-bold text-3xl xl:text-5xl text-orange lowercase"
				style={{ textShadow: "2px 1px .5px #D11E06" }}
			>
				lm
			</div>
			<img src="../static/handsWhite.png" width="80px" />
		</div>
	);
};

export default Logo;
