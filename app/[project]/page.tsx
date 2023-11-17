"use client";

import NavBar from "@/components/NavBar";
import "@fontsource/poppins";
import { Divider } from "@mui/material";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import ProjectContextProvider, { ProjectContext } from "@/ProjectContext";
import { useContext } from "react";

const Project = ({
	//ref: React.ForwardedRef<HTMLDivElement>,
	params,
}: {
	params: { project: string };
}) => {
	const projectCtx = useContext(ProjectContext);
	return (
		// <PageTransition>
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
			<div className="flex mx-8">
				<div
					style={{ color: "#ba9467", fontFamily: "latienne-pro" }}
					className="font-bold text-2xl w-full"
				>
					{projectCtx.project.title}
				</div>
				<div
					style={{ color: "#ba9467", fontFamily: "Poppins" }}
					className="text-lg justify-end flex w-full "
				>
					{projectCtx.project.type}
				</div>
			</div>
			<div>
				<div>
					{Object.entries(projectCtx.project).map((key, value) => {
						console.log(key, value);
						if (
							key[0] !== "id" &&
							key[0] !== "title" &&
							key[0] !== "type"
						) {
							return (
								<div>
									<div className="text-white flex mx-8 my-4 lg:w-1/2">
										<div
											className="font-bold capitalize w-1/2"
											style={{
												fontFamily: "Poppins",
											}}
										>
											{key[0]}
										</div>
										<div
											className="italic"
											style={{
												fontFamily: "Poppins",
											}}
										>
											{key[0] === "gear" &&
											key[1][1] !== undefined
												? key[1][0] + ", " + key[1][1]
												: key[1]}
										</div>
										<Divider
											sx={{
												backgroundColor: "white",
											}}
										/>
									</div>
									<div className="mx-8 lg:w-1/2">
										<Divider
											sx={{
												backgroundColor: "white",
											}}
										/>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
			{/* <div className="grid grid-cols-2 ml-6">
					<div
						className=" text-white font-bold"
						style={{ fontFamily: "Poppins" }}
					>
						Location
					</div>
					<div
						className="col-start-2 text-white"
						style={{
							fontFamily: "Poppins",
							fontStyle: "italic",
						}}
					>
						{projectCtx.project.location}
					</div>
					<div className="col-span-2 mr-6">
						<Divider
							// variant="inset"
							sx={{
								marginTop: 2,
								backgroundColor: "white",
								marginBottom: 2,
							}}
						/>
					</div>
					<div
						className=" text-white font-bold"
						style={{ fontFamily: "Poppins" }}
					>
						Venue
					</div>
					<div
						className="col-start-2 text-white"
						style={{
							fontFamily: "Poppins",
							fontStyle: "italic",
						}}
					>
						{projectCtx.project.venue}
					</div>
					<div className="col-span-2 mr-6">
						<Divider
							// variant="inset"
							sx={{
								marginTop: 2,
								backgroundColor: "white",
								marginBottom: 2,
							}}
						/>
					</div>
					<div
						className=" text-white font-bold"
						style={{ fontFamily: "Poppins" }}
					>
						Equipment
					</div>
					{projectCtx.project.equipment.map((x) => {
						return (
							<div
								className="col-start-2 text-white"
								style={{
									fontFamily: "Poppins",
									fontStyle: "italic",
								}}
							>
								{x}
							</div>
						);
					})}
					{/* <div
						className="col-start-2 text-white"
						style={{ fontFamily: "Poppins" }}
					>
						
					</div> */}
			{/* <div className="col-span-2 mr-6">
					<Divider
						// variant="inset"
						sx={{
							marginTop: 2,
							backgroundColor: "white",
							marginBottom: 2,
						}}
					/>
				</div> */}
			{/* </div> */}
		</div>
		// </PageTransition>
	);
};

export default Project;
