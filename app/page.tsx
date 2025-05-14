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
	const [swiperIndex, setSwiperIndex] = useState(null);

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
			<div className="py-1 pl-8 z-20 xl:w-4/5 flex fixed">
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
							src={"../static/reel2025.mp4"}
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
							src={"../static/mobileReel2025.mp4"}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div className=" text-orange flex justify-start items-center text-3xl xl:text-5xl my-8  ml-3 z-20">
				<div className="w-full xl:w-3/4 border-l-4 px-4 border-red">
					<span
						className={`${almaraiBold.className} uppercase text-orange`}
						style={{
							textShadow: "2px 1px .5px #D11E06",
						}}
					>
						Boutique film makers.&nbsp;
					</span>
					<span
						className={`${almaraiBold.className} uppercase text-yellow`}
						style={{
							textShadow: "2px 1px .5px #ffa128",
						}}
					>
						relive the moments you never want to forget.
					</span>
				</div>
			</div>
			<div className="w-full flex justify-center xl:px-8 px-0 ">
				<div className="z-20 justify-center items-center flex overflow-hidden w-screen rounded-3xl pb-2">
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
							disableOnInteraction: false,
						}}
						mousewheel={false}
						speed={1500}
						onClick={() => {
							setSwiperIndex(swiper.clickedIndex);
							projectCtx.setProject(
								projects[swiper.clickedIndex]
							);
							setTimeout(() => {
								router.push(
									"/" + projects[swiper.clickedIndex].id
								);
							}, 1000);
						}}
						style={{
							overflow: "hidden",
							cursor: "pointer",
							width: "100%",
						}}
					>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "start",
								textAlign: "start",
								overflow: "hidden",
							}}
						>
							<video
								playsInline
								autoPlay
								muted
								loop
								className="w-full"
								poster={"../static/lilly.png"}
								style={{
									opacity: swiperIndex === 0 ? 0.3 : 1,
									transition: "opacity 0.2s ease",
									cursor: "pointer",
									borderRadius: "8px",
								}}
							>
								<source
									src={"../static/lilly.mp4"}
									type="video/mp4"
								/>
							</video>
							<div
								style={{
									textShadow: "2px 1px .5px #D11E06",
								}}
								className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-orange mt-8 w-full flex-nowrap flex`}
							>
								<div>
									<div className="flex flex-nowrap">
										<span className="flex items-end">
											Lily
										</span>
									</div>

									<div
										className={`${almaraiBold.className} `}
									>
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
							<video
								playsInline
								autoPlay
								muted
								loop
								className="w-full"
								poster={"../static/asia.png"}
								style={{
									opacity: swiperIndex === 1 ? 0.3 : 1,
									transition: "opacity 0.2s ease",
									cursor: "pointer",
									borderRadius: "8px",
								}}
							>
								<source
									src={"../static/asia.mp4"}
									type="video/mp4"
								/>
							</video>
							<div
								style={{
									textShadow: "2px 1px .5px #ffa128",
								}}
								className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-red mt-8 w-full flex-nowrap flex`}
							>
								<div className="">
									<div className=" flex flex-nowrap">
										<span className=" flex items-end">
											Ash
										</span>
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
							<video
								playsInline
								autoPlay
								muted
								loop
								className="w-full"
								poster={"../static/emma.png"}
								style={{
									opacity: swiperIndex === 2 ? 0.3 : 1,
									transition: "opacity 0.2s ease",
									cursor: "pointer",
									borderRadius: "8px",
								}}
							>
								<source
									src={"../static/emma.mp4"}
									type="video/mp4"
								/>
							</video>
							<div
								style={{
									textShadow: "2px 1px .5px #D11E06",
								}}
								className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-yellow mt-8 w-full flex-nowrap flex`}
							>
								<div className="">
									<div className=" flex flex-nowrap">
										<span className=" flex items-end">
											Evan
										</span>
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
							<video
								playsInline
								autoPlay
								muted
								loop
								className="w-full"
								poster={"../static/almery.png"}
								style={{
									opacity: swiperIndex === 3 ? 0.3 : 1,
									transition: "opacity 0.2s ease",
									cursor: "pointer",
									borderRadius: "8px",
								}}
							>
								<source
									src={"../static/almery.mp4"}
									type="video/mp4"
								/>
							</video>
							<div
								style={{
									textShadow: "2px 1px .5px #D11E06",
								}}
								className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-orange mt-8 w-full flex-nowrap flex`}
							>
								<div className="">
									<div className=" flex flex-nowrap">
										<span className=" flex items-end">
											Zach
										</span>
									</div>

									<div className={`${almaraiBold.className}`}>
										Almery
									</div>
								</div>
							</div>
						</SwiperSlide>
						{/* <SwiperSlide
							style={{
								display: "flex",
								justifyContent: "start",
								textAlign: "start",
								overflow: "hidden",
							}}
						>
							<div
								style={{
									textShadow: "2px 1px .5px #ffa128",
								}}
								className={`${almaraiLight.className} ml-8 uppercase absolute z-10 text-5xl xl:text-6xl font-bold text-red mt-8 w-full flex-nowrap flex`}
							>
								<div className="">
									<div className=" flex flex-nowrap">
										<span className=" flex items-end">
											Eric
										</span>
									</div>

									<div className={`${almaraiBold.className}`}>
										Christina
									</div>
								</div>
							</div>
							<img
								src="../static/eric.gif"
								className="rounded-3xl"
							/>
						</SwiperSlide> */}
					</Swiper>
				</div>
			</div>
			<div className=" text-orange flex justify-start items-center text-3xl xl:text-5xl my-8  ml-3 z-20">
				<div className="w-full xl:w-3/4 border-l-4 px-4 border-red">
					<span
						className={`${almaraiBold.className} uppercase text-orange`}
						style={{
							textShadow: "2px 1px .5px #D11E06",
						}}
					>
						Start of a season. End of an era. Smooching in sunshine.
						Wrestling in rain. This is your story.
					</span>
					<span
						className={`${almaraiBold.className} uppercase text-yellow`}
						style={{
							textShadow: "2px 1px .5px #ffa128",
						}}
					>
						Grovefilm is here to tell your story, so you can relive
						the moments you never want to forget.{" "}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Home;
