"use client";

import Logo from "@/components/Logo";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Almarai } from "next/font/google";

const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const Splash = () => {
	const router = useRouter();
	useEffect(() => {
		const timeout = setTimeout(() => router.push("/home"), 19000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	//state to set logo display prop;
	const [display, setDisplay] = useState("flex");

	//state to set logo color
	const [color, setColor] = useState("#ba9467");

	// alternates logo display prop from hidden to flex
	function switchdisplay() {
		setDisplay(display === "hidden" ? "flex" : "hidden");
	}

	//alternates logo color from secondary to primary
	function switchColor() {
		setColor(color === "#0f172a" ? "#ba9467" : "#0f172a");
	}

	//calls switchDisplay and SwitchColor on intervals
	setInterval(switchdisplay, 6000);
	setInterval(switchColor, 8000);

	return (
		<div>
			{/* mobile video */}
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
			{/* desktop video */}
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

			<div className="flex grid grid-cols-3 grid-rows-3 h-screen">
				<div className="justify-center items-center row-start-2 flex col-start-2">
					<div className={`${display}`}>
						<Logo color={color} />
					</div>
				</div>

				<div
					className={`${almaraiBold.className} text-secondary uppercase flex justify-center col-start-1 row-span-3 col-span-2 items-start flex-col`}
				>
					<div className="ml-8 lg:ml-16">Boutique Film Makers</div>
				</div>

				<div
					className={`flex justify-center col-start-3 row-start-3 items-end flex-col mr-8 lg:mr-16`}
				>
					<Button
						className={`${almaraiBold.className}`}
						sx={{
							color: "#ba9467",
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
	);
};

export default Splash;
