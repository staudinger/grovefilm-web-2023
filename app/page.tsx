"use client";
import Logo from "@/components/Logo";
import "@fontsource/poppins";
import { Button } from "@mui/material";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Splash = () => {
	const router = useRouter();
	useEffect(() => {
		const timeout = setTimeout(() => router.push("/home"), 19000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		// <PageTransition>
		<div className="h-screen">
			<video
				playsInline
				autoPlay
				muted
				loop
				poster="../../static/background.PNG"
				className="w-full h-full -z-10 fixed object-cover block md:hidden"
			>
				<source
					src={"../../static/2023ReelMobile.mp4"}
					type="video/mp4"
				/>
			</video>
			<video
				playsInline
				autoPlay
				muted
				loop
				poster="../../static/background.PNG"
				className="w-full h-full -z-10 fixed object-cover hidden sm:hidden md:block lg:block xl:block"
			>
				<source
					src={"../../static/2023ReelDesktop.mp4"}
					type="video/mp4"
				/>
			</video>

			<div className=" flex grid grid-cols-3  grid-rows-3 h-screen">
				<div className="justify-center items-center row-start-2 flex col-start-2 ">
					<Logo />
				</div>
				<div className="flex justify-center col-start-1 row-span-3 col-span-2 items-start flex-col">
					<div
						className=" font-bold ml-8 lg:ml-16"
						style={{
							fontFamily: "Poppins",
							textShadow: ".5px .5px 1px #0f172a",
							color: "#ba9467",
						}}
					>
						Boutique Film Makers
					</div>
				</div>
				<div className="flex justify-center col-start-3 row-start-3 items-end flex-col mr-8 lg:mr-16">
					<Button
						sx={{
							color: "#ba9467",
							fontFamily: "Poppins",
							fontWeight: "bold",
							textShadow: ".5px .5px 1px #0f172a",
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
		// </PageTransition>
	);
};

export default Splash;
