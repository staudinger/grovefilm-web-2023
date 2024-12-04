"use client";

import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import { Almarai } from "next/font/google";
import { useState } from "react";

const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});

const Manifesto = () => {
	const [desktop, setDesktop] = useState(
		typeof window !== "undefined" && window.innerWidth > 767.98
	);

	return (
		<PageTransition>
			<div className="bg-slate-900 h-screen">
				<NavBar />
				<div className="xl:hidden flex m-20 mb-16"></div>

				<div className="justify-start hidden items-start pt-16 xl:pt-0 ml-8 mb-2 xl:flex">
					<Logo color="#ba9467" />
				</div>

				<div className="h-full">
					<video
						playsInline
						autoPlay
						muted
						loop
						poster="../../static/background.PNG"
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
						<div className="flex justify-center items-center mx-8 text-2xl xl:text-5xl mb-12">
							<div
								style={{ color: "white" }}
								className="w-full xl:w-3/4 border-l px-4 border-secondary"
							>
								<span
									className={`${almaraiLight.className} uppercase`}
								>
									Start of a season. End of an era. Smooching
									in sunshine. Wrestling in rain. Your story
									is weaved with these moments.
								</span>
								<span
									className={`${almaraiBold.className} uppercase`}
								>
									Grovefilm is here to tell that story, so you
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
