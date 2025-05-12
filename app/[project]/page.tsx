"use client";

import NavBar from "@/components/NavBar";
import "@fontsource/poppins";
import { Divider, Button } from "@mui/material";
import Logo from "@/components/Logo";
import { ProjectContext } from "@/ProjectContext";
import { useContext } from "react";
import { Almarai } from "next/font/google";
import { useRouter } from "next/navigation";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});
const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const Project = ({ params }: { params: { project: string } }) => {
	const router = useRouter();

	const projectCtx = useContext(ProjectContext);
	return (
		<div className="bg-black h-screen overflow-x-hidden">
			<NavBar zIndex={20} />
			{/* <div className="m-12 xl:hidden flex"></div> */}
			<div className=" pl-6 z-20 xl:w-4/5 flex fixed">
				<Button
					sx={{ color: "#D11E06" }}
					onClick={() => {
						router.push("/");
					}}
				>
					<Logo color="#ba9467" />
				</Button>
			</div>
			<div className=" xl:mt-0 mt-24 xl:h-full h-auto">
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
			</div>
			<div className="flex mx-8 mb-8 lg:w-1/2">
				<div
					className={`${almaraiBold.className} text-3xl w-full text-red uppercase`}
				>
					{projectCtx.project.title}
				</div>
			</div>
			<div className="mb-8">
				<div>
					{Object.entries(projectCtx.project).map((key, value) => {
						if (
							key[0] !== "id" &&
							key[0] !== "title" &&
							key[0] !== "type"
						) {
							return (
								<div key={value}>
									<div className="text-orange flex mx-8 my-4 lg:w-1/2 border-b-2 border-yellow">
										<div
											className={`${almaraiBold.className} text-2xl w-1/2 uppercase`}
										>
											{key[0]}
										</div>
										<div
											className={`${almaraiBold.className} capitalize flex items-center justify-end w-full text-red`}
										>
											{key[0] === "gear" &&
											key[1][1] !== undefined
												? key[1][0] + ", " + key[1][1]
												: key[1]}
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Project;
