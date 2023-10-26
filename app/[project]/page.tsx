"use client";

import NavBar from "@/components/NavBar";
import "@fontsource/poppins";
import { Divider } from "@mui/material";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";

const Project = ({
	// ref: React.ForwardedRef<HTMLDivElement>,
	params,
}: {
	params: { project: string };
}) => {
	return (
		<div className="bg-slate-900 h-screen">
			<NavBar />

			<Logo />
			<iframe
				src={
					"https://player.vimeo.com/video/" +
					params.project +
					"?h=bc4804edba&frameborder='0'&autoplay=1&loop=1&autopause=0&muted=1"
				}
				width="100%"
				height="615px"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
				className=" h-1/4 sm:h-full md:h-1/2 lg:h-5/6"
			></iframe>
			<div
				style={{ color: "#ba9467", fontFamily: "Poppins" }}
				className="font-bold ml-6 text-2xl"
			>
				Jessica & Charlie
			</div>
			<div
				style={{ color: "#ba9467", fontFamily: "serif" }}
				className="ml-6 mb-4 text-lg"
			>
				Wedding
			</div>
			<div className="grid grid-cols-2 ml-6">
				<div
					className=" text-white font-bold"
					style={{ fontFamily: "Poppins" }}
				>
					Location
				</div>
				<div
					className="col-start-2 text-white"
					style={{ fontFamily: "Poppins" }}
				>
					Lake Wales, Florida
				</div>
				<div className="col-span-2 mr-6">
					<Divider
						// variant="inset"
						sx={{ marginTop: 2, backgroundColor: "white" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;
