"use client";
import ProjectContextProvider from "@/ProjectContext";
import PageTransition from "@/components/PageTransition";
import useScreenWidth from "@/components/useScreenWidth";
import "@fontsource/poppins";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Splash = (ref: React.ForwardedRef<HTMLDivElement>) => {
	const isDesktop =
		typeof window !== "undefined" && window.innerWidth > 767.98;
	console.log(isDesktop);

	const router = useRouter();

	setTimeout(() => router.push("/home"), 6000);

	return (
		<PageTransition ref={ref}>
			<div className="h-screen">
				<video
					autoPlay
					muted
					loop
					poster="../../static/background.PNG"
					className="w-full h-full -z-10 fixed object-cover"
				>
					<source
						src={
							true
								? "../../static/desktopReel.mp4"
								: "../../static/mobileReel.mp4"
						}
						type="video/mp4"
					/>
				</video>

				<div className=" flex grid grid-cols-3  grid-rows-3 h-screen">
					{/* <div className="flex justify-center items-end col-start-1 col-span-2">
					<div className="text-white font-bold">
						Boutique Film Makers
					</div>
				</div> */}
					<div className="justify-center items-center row-start-2 flex col-start-2 ">
						<img src="../../static/grovefilmLogo.png" width="75%" />
					</div>{" "}
					<div className="flex justify-end col-start-1 row-span-3 col-span-2 items-start flex-col mb-10">
						<div
							className="text-white font-bold ml-8"
							style={{ fontFamily: "Poppins" }}
						>
							Boutique Film Makers
						</div>
					</div>
					<div className="flex justify-end col-start-3 row-start-3 items-end flex-col mr-8 mb-8">
						<Button
							sx={{
								color: "white",
								fontFamily: "Poppins",
								fontWeight: "bold",
							}}
							onClick={() => {
								router.push("/home");
							}}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Splash;
