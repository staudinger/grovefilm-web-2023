"use client";

import NavBar from "@/components/NavBar";
import "@fontsource/poppins";
import { Divider } from "@mui/material";
import Logo from "@/components/Logo";
import { ProjectContext } from "@/ProjectContext";
import { useContext } from "react";
import { Almarai } from "next/font/google";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});
const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const Project = ({ params }: { params: { project: string } }) => {
	const projectCtx = useContext(ProjectContext);
	return (
		<div className="bg-slate-900 h-screen overflow-x-hidden ">
			<NavBar />
			<div className="m-12 xl:hidden flex"></div>
			<div className="justify-start hidden items-start pt-16 xl:pt-0 ml-8 mb-2 xl:flex">
				<Logo color="#ba9467" />
			</div>
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
			<div className="flex m-8 lg:w-1/2">
				<div
					className={`${almaraiLight.className} text-2xl w-full text-secondary uppercase`}
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
								<div>
									<div className="text-white flex mx-8 my-4 lg:w-1/2">
										<div
											className={`${almaraiBold.className} text-2xl w-1/2 uppercase`}
										>
											{key[0]}
										</div>
										<div
											className={`${almaraiLight.className} capitalize flex items-center justify-end w-full`}
										>
											{key[0] === "gear" &&
											key[1][1] !== undefined
												? key[1][0] + ", " + key[1][1]
												: key[1]}
										</div>
										<Divider
											sx={{
												backgroundColor: "#ba9467",
											}}
										/>
									</div>
									<div className="mx-8 lg:w-1/2">
										<Divider
											sx={{
												backgroundColor: "#ba9467",
											}}
										/>
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
