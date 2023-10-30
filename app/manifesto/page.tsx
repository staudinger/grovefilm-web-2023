"use client";

import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import "@fontsource/poppins";
import { useEffect, useState } from "react";

const Manifesto = (ref: React.ForwardedRef<HTMLDivElement>) => {
	const [desktop, setDesktop] = useState(
		window.innerWidth > 1000 ? true : false
	);

	return (
		<PageTransition ref={ref}>
			<div className="bg-slate-900 h-screen">
				<NavBar />

				<Logo />

				<div className="h-full">
					<video
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
									? "../../static/desktopReel.mp4"
									: "../../static/mobileReel.mp4"
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
						className="mx-8 absolute font-bold h-full flex justify-center items-center lg:mx-80"
					>
						It’s the cool air in the sun-kissed sky. It's a song
						that takes you back. It's the feeling of returning home.
						Your story is weaved with these moments of memory and
						family and love. Grovefilm is here to tell the story.
						This is our purpose and why we believe that every
						project is an opportunity to create meaning. To relive
						the moments we never want to forget. &mdash; Peter
						Staudinger, Founder.
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Manifesto;
