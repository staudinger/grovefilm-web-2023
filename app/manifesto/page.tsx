"use client";

import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import "@fontsource/poppins";

const Manifesto = (ref: React.ForwardedRef<HTMLDivElement>) => {
	return (
		<PageTransition ref={ref}>
			<div className="bg-slate-900 h-screen">
				<NavBar />
				<div className=" -my-14 mx-2 flex justify-center items-center">
					<img src="../../static/GFSquareOrange.PNG" />
				</div>
				{/* <div className="ml-6 -mt-16">

            </div> */}
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

				{/* <div className=" flex grid grid-cols-3  grid-rows-3 h-screen">
				<div className="flex justify-center items-end col-start-1 col-span-2">
					<div className="text-white font-bold">
						Boutique Film Makers
					</div>
				</div>
				<div className="justify-center items-center row-start-2 flex col-start-2 ">
					<img src="../../static/grovefilmLogo.png" width="75%" />
				</div>
				<div className="flex justify-center col-start-1 row-span-3 col-span-2 items-start flex-col">
					<div className="text-white font-bold ml-8">
						Boutique Film Makers
					</div>
				</div>
				<div className="flex justify-center col-start-3 row-start-3 items-end flex-col">
					<div className="text-white font-bold mr-8">Next</div>
				</div>
			</div> */}
				<div
					style={{ fontFamily: "Poppins", color: "white", zIndex: 2 }}
					className="mx-6 absolute font-bold"
				>
					It’s the scent of citrus, heavy in the sun-kissed air. It’s
					the song that takes you back to a favorite memory. It’s the
					feeling you get when you finally come home. Your story, like
					mine, is weaved with these moments of love and family and
					memory. Grovefilm is here to tell your story. My story
					started amongst the Orange Groves of Florida: Grovefilm pays
					homage to my roots, and is committed to yours. I’ll show up
					filled with curiosity and passion and the belief that every
					project is an opportunity to create meaning. To relive the
					moments we never want to forget. &mdash; Peter Staudinger,
					Founder.
				</div>
			</div>
		</PageTransition>
	);
};

export default Manifesto;
