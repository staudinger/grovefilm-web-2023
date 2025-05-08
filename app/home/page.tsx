"use client";

import NavBar from "@/components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Mousewheel, Autoplay } from "swiper/modules";
import "@fontsource/poppins";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { ProjectContext } from "@/ProjectContext";
import { Almarai } from "next/font/google";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});
const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const Home = () => {
	const [swiper, setSwiper] = useState<any>(null);
	const projectCtx = useContext(ProjectContext);

	//projects
	const projects = [
		{
			title: "Lily & Craig",
			id: "1032086385",
			location: "Port Saint Lucie, FL",
			venue: "Crane Club at Tesoro",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "Ash & Asia",
			id: "1032096293",
			location: "Chicago, IL",
			venue: "Warwick Allerton Hotel",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "Emma & Evan",
			id: "1032100369",
			location: "Ybor City, FL",
			venue: "Centro Asturiano",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "Zach & Almery",
			id: "877103688",
			location: "St. Pete Beach, FL",
			venue: "The Don CeSar",
			gear: ["Panasonic S1H"],
		},
		{
			title: "Eric & Christina",
			id: "877111610",
			location: "Winter Park, CO",
			venue: "Winter Park Resort",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "AJ & Talia",
			id: "877101187",
			location: "St. Petersburg, FL",
			venue: "The Birchwood / Sunken Gardens",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "Connor & Meredith",
			id: "713488531",
			location: "Chicago, IL",
			venue: "Green House Loft",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
		{
			title: "Bolts Brew Fest",
			id: "877123147",
			location: "Tampa, FL",
			venue: "Amalie Arena",
			gear: ["Panasonic S1H", "DJI Air S2"],
		},
	];

	const router = useRouter();

	return (
		<div className="bg-black overflow-hidden flex flex-col">
			<NavBar />
			<div className="justify-center xl:justify-start flex xl:items-start pt-16 xl:pt-0 ml-0 xl:ml-8">
				<Logo color="#ba9467" />
			</div>
			<div className="grid-rows-3 grid-flow-col xl:grid hidden">
				<div className="col-start-1 row-start-1 row-span-3">
					<video
						playsInline
						autoPlay
						muted
						loop
						className="w-full flex"
					>
						<source
							src={"../static/2023ReelDesktop.mp4"}
							type="video/mp4"
						/>
					</video>
				</div>
				<div className="col-start-1 row-start-3 w-full justify-center flex items-center"></div>
			</div>
			<div className="grid grid-rows-3 grid-flow-col xl:hidden">
				<div className="col-start-1 row-start-1 row-span-3">
					<video
						playsInline
						autoPlay
						muted
						loop
						className="w-full flex"
					>
						<source
							src={"../static/2023ReelMobile.mp4"}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className=" text-white flex justify-start items-center text-3xl xl:text-5xl mb-8 ml-9">
				<div className="w-full xl:w-3/4 border-l px-4 border-secondary">
					<span className={`${almaraiLight.className} uppercase`}>
						Boutique film makers.&nbsp;
					</span>
					<span className={`${almaraiBold.className} uppercase`}>
						relive the moments you never want to forget.
					</span>
				</div>
			</div>
			<div className="justify-center items-center flex overflow-hidden w-screen lg:w-11/12 xl:w-full rounded-3xl pb-2">
				<Swiper
					onInit={(swiper) => {
						setSwiper(swiper);
					}}
					slidesPerView={1}
					spaceBetween={35}
					// using "ratio" endpoints
					breakpoints={{
						"@0.75": {
							slidesPerView: 2,
							spaceBetween: 35,
						},
						"@1.00": {
							slidesPerView: 3,
							spaceBetween: 35,
						},
					}}
					modules={[Mousewheel, Autoplay]}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					mousewheel={true}
					speed={1000}
					onClick={() => {
						projectCtx.setProject(projects[swiper.clickedIndex]);
						router.push("/" + projects[swiper.clickedIndex].id);
					}}
					style={{ overflow: "hidden", cursor: "pointer" }}
				>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						<img
							src="../static/craig.gif"
							className="rounded-3xl"
						/>
						<div
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div>
								<div className="flex flex-nowrap">
									<span className="flex items-end">Lily</span>
								</div>

								<div className={`${almaraiBold.className}`}>
									Craig
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						<img src="../static/ash.gif" className="rounded-3xl" />
						<div
							style={
								{
									// textShadow: ".25px .25px .25px #ba9467",
								}
							}
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div className="">
								<div className=" flex flex-nowrap">
									<span className=" flex items-end">Ash</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Asia
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						<img src="../static/evan.gif" className="rounded-3xl" />
						<div
							style={
								{
									// textShadow: ".25px .25px .25px #ba9467",
								}
							}
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div className="">
								<div className=" flex flex-nowrap">
									<span className=" flex items-end">
										Evan
									</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Emma
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						<img src="../static/zach.gif" className="rounded-3xl" />
						<div
							style={
								{
									// textShadow: ".25px .25px .25px #ba9467",
								}
							}
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div className="">
								<div className=" flex flex-nowrap">
									<span className=" flex items-end">
										Zach
									</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Almery
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						<div
							style={
								{
									// textShadow: ".25px .25px .25px #ba9467",
								}
							}
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div className="">
								<div className=" flex flex-nowrap">
									<span className=" flex items-end">
										Eric
									</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Christina
								</div>
							</div>
						</div>
						<img src="../static/eric.gif" className="rounded-3xl" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Home;
