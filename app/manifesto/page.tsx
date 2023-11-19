"use client";

import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import "@fontsource/poppins";
import { useEffect, useState } from "react";

const Manifesto = () => {
	const [desktop, setDesktop] = useState(
		typeof window !== "undefined" && window.innerWidth > 767.98
	);

	return (
		<PageTransition>
			<div className="bg-slate-900 h-screen">
				<NavBar />

				<Logo />

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
							textShadow: "1px 1px 2px black",
						}}
						className="absolute font-bold h-full flex justify-center items-center lg:text-center mx-8 lg:mx-96 "
					>
						The start of a season. The end of an era. Smooches with
						sunshine. Wrestling with rain. Your story is weaved with
						these moments, and Grovefilm is here to tell it. This is
						our purpose and why we believe that every partnership is
						an opportunity to create meaning. To relive the moments
						we never want to forget. &mdash; Peter Staudinger,
						Founder.
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Manifesto;
