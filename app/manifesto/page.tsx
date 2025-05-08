"use client";

import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import { Almarai } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});

const Manifesto = () => {
	const router = useRouter();

	const [desktop, setDesktop] = useState(
		typeof window !== "undefined" && window.innerWidth > 767.98
	);

	return (
		<PageTransition>
			<div className="bg-black h-screen">
				<NavBar zIndex={20} />

				<div className="pl-6 z-20 xl:w-4/5 flex fixed">
					<Button
						sx={{ color: "#D11E06" }}
						onClick={() => {
							router.push("/");
						}}
					>
						<Logo color="#ba9467" />
					</Button>
				</div>

				<div className="h-full">
					<video
						playsInline
						autoPlay
						muted
						loop
						className="w-full h-full fixed object-cover"
						style={{ zIndex: 1 }}
					>
						<source
							src={
								desktop
									? "../../static/2023ReelDesktop.mp4"
									: "../../static/2023ReelMobile.mp4"
							}
							type="video/mp4"
						/>
					</video>
					<div
						style={{
							fontFamily: "Poppins",
							color: "white",
							zIndex: 2,
							textShadow: "1px 1px 2px #0f172a",
						}}
						className="absolute font-bold h-full flex justify-center items-center lg:text-center mx-8 lg:mx-58 "
					>
						<div className="flex justify-center items-center xl:mx-8 mx-0 text-2xl xl:text-5xl mb-12">
							<div className="w-full xl:w-3/4 border-l-4 px-4 border-red">
								<span
									className={`${almaraiBold.className} uppercase text-orange`}
								>
									Start of a season. End of an era. Smooching
									in sunshine. Wrestling in rain. Your story
									is weaved with these moments.
								</span>
								<span
									className={`${almaraiBold.className} uppercase text-yellow`}
								>
									Grovefilm is here to tell your story, so you
									can relive the moments you never want to
									forget.
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Manifesto;
