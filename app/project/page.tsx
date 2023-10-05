import NavBar from "@/components/NavBar";
import "@fontsource/poppins";
import { Divider } from "@mui/material";

const Project = () => {
	return (
		<div className="bg-slate-900 h-screen">
			<NavBar />
			<div className=" -my-14 mx-2 flex justify-center items-center">
				<img src="../../static/GFSquareOrange.PNG" />
			</div>{" "}
			<iframe
				src="https://player.vimeo.com/video/619197093?h=bc4804edba&frameborder='0'&autoplay=1&loop=1&autopause=0&muted=1"
				width="100%"
				height="615px"
				allow="autoplay; fullscreen; picture-in-picture"
				allowFullScreen
				className="-mt-72 -mb-48"
			></iframe>
			<div
				style={{ color: "#ba9467", fontFamily: "Poppins" }}
				className="font-bold ml-6"
			>
				Jessica & Charlie
			</div>
			<div
				style={{ color: "#ba9467", fontFamily: "Poppins" }}
				className="ml-6 mb-4"
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
