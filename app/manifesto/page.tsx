"use client";

import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import "@fontsource/poppins";

const Manifesto = (ref: React.ForwardedRef<HTMLDivElement>) => {
	return (
		<PageTransition ref={ref}>
			<div className="bg-slate-900 h-screen">
				<NavBar />
				{/* <div className=" -my-14 mx-2 flex justify-center items-center">
					<img src="../../static/GFSquareOrange.PNG" />
				</div> */}
				<div className="flex justify-center">
					<div
						style={{
							color: "#ba9467",
							// fontFamily: "latienne-pro",
							// fontStyle: "normal",
							// fontWeight: 400,
						}}
						className="tracking-tighter font-latienne-pro text-white font-bold text-7xl"
					>
						Grove
					</div>
					<div
						style={{ letterSpacing: -7, color: "#ba9467" }}
						className="font-latienne-pro text-white font-bold text-7xl"
					>
						f
					</div>
					<div
						style={{ paddingTop: 1, color: "#ba9467" }}
						className="tracking-tighter font-latienne-pro text-white font-bold text-7xl "
					>
						i
					</div>
					<div
						style={{ color: "#ba9467" }}
						className="tracking-tighter font-latienne-pro text-white font-bold text-7xl "
					>
						lm
					</div>
				</div>
				{/* <div className="ml-6 -mt-16">

            </div> */}
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
							src="../../static/mobileReel.mp4"
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
						className="mx-6 absolute font-bold h-full flex justify-center items-center"
					>
						It’s the scent of the air, cool in the sun-kissed sky.
						It’s the song that takes you back. It’s the feeling when
						you come home. Your story is weaved with these moments
						of memory and family and love. Grovefilm is here to tell
						this story. I’ll show up filled with curiosity and
						passion and the belief that every project is an
						opportunity to create meaning. To relive the moments we
						never want to forget. &mdash; Peter Staudinger, Founder.
					</div>
				</div>
			</div>
		</PageTransition>
	);
};

export default Manifesto;
