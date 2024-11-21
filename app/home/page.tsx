"use client";

import NavBar from "@/components/NavBar";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel, Autoplay } from "swiper/modules";
import "@fontsource/poppins";
import { useState, useContext } from "react";

import { Button } from "@mui/material";
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
	const [checked, setChecked] = useState(false);

	const [swiper, setSwiper] = useState<any>(null);
	const projectCtx = useContext(ProjectContext);

	const videos = [
		{
			title: "Zach & Almery",
			id: "877103688",

			location: "St. Pete Beach, FL",
			venue: "The Don CeSar",
			gear: ["Panasonic S1H"],
			type: "Wedding",
		},
		{
			title: "Eric & Christina",
			id: "877111610",
			location: "Winter Park, CO",
			venue: "Winter Park Resort",
			gear: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "AJ & Talia",
			id: "877101187",
			location: "St. Petersburg, FL",
			venue: "The Birchwood / Sunken Gardens",
			gear: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "Connor & Meredith",
			id: "713488531",
			location: "Chicago, IL",
			venue: "Green House Loft",
			gear: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "Bolts Brew Fest",
			id: "877123147",
			location: "Tampa, FL",
			venue: "Amalie Arena",
			gear: ["Panasonic S1H", "DJI Air S2"],

			type: "Commercial",
		},
	];

	const router = useRouter();
	return (
		<div className="bg-slate-900 overflow-hidden flex flex-col">
			<NavBar />
			<div className="justify-center flex items-start pt-16 xl:pt-4">
				<Logo color="#ba9467" />
			</div>
			<div className="flex justify-center items-center mx-8 text-3xl xl:text-5xl mb-12">
				<div
					style={{ color: "white" }}
					className="w-full xl:w-3/4 border-l px-4 border-secondary"
				>
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
						delay: 2000,
						disableOnInteraction: true,
					}}
					mousewheel={true}
					speed={1000}
					onClick={() => {
						projectCtx.setProject(videos[swiper.clickedIndex]);
						router.push("/" + videos[swiper.clickedIndex].id);
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
							src="../static/Almery-bw.jpg"
							className="rounded-3xl"
						/>
						<div
							style={{
								textShadow: ".25px .25px .25px #ba9467",
							}}
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
						<img
							src="../static/Christina-bw-edit.jpg"
							className="rounded-3xl"
						/>
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
									<span className=" flex items-end">AJ</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Talia
								</div>
							</div>
						</div>
						<img
							src="../static/Talia-bw-edit.jpg"
							className="rounded-3xl"
						/>
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
										Connor
									</span>
									{/* <span
										className={`${almaraiLight.className} text-4xl flex items-center justify-center pl-2`}
									>
										&
									</span> */}
								</div>

								<div className={`${almaraiBold.className}`}>
									Meredith
								</div>
							</div>
						</div>
						<img
							src="../static/connor-bw.jpg"
							className="rounded-3xl"
						/>
					</SwiperSlide>
					<SwiperSlide
						style={{
							display: "flex",
							justifyContent: "start",
							textAlign: "start",
							overflow: "hidden",
						}}
					>
						{/* <div
							style={{
								textShadow: ".25px .25px .25px #ba9467",
							}}
							className=" absolute text-6xl font-latienne-pro font-bold text-slate-900 mt-12 flex flex-col h-full"
						>
							<div className="justify-center items-end flex h-3/5">
								Bolts
							</div>
							<div className="justify-center items-start flex -m-4">
								Brew
							</div>
							<div className="justify-center items-start flex ">
								Fest
							</div>
						</div> */}
						<div
							style={
								{
									// textShadow: ".25px .25px .25px #ba9467",
								}
							}
							className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-slate-900 mt-8 w-full flex-nowrap flex`}
						>
							<div className="">
								<span className=" flex items-end">Bolts</span>
								<span className=" flex items-end">Brew</span>

								<div className={`${almaraiBold.className}`}>
									Fest
								</div>
							</div>
						</div>
						<img
							src="../static/stanley-bw.jpg"
							className="rounded-3xl"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
		// </PageTransition>
	);
};

export default Home;
