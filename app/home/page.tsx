"use client";

import NavBar from "@/components/NavBar";
import { Fade } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel, Autoplay } from "swiper/modules";
import "@fontsource/poppins";
import { useState, useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import PageTransition from "@/components/PageTransition";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { ProjectContext } from "@/ProjectContext";

const Home = () => {
	const [checked, setChecked] = useState(false);

	const [swiper, setSwiper] = useState<any>(null);
	const projectCtx = useContext(ProjectContext);

	const videos = [
		{
			title: "Almery & Zach",
			id: "877103688",

			location: "St. Pete Beach, FL",
			venue: "The Don CeSar",
			equipment: ["Panasonic S1H"],
			type: "Wedding",
		},
		{
			title: "Christina & Eric",
			id: "877111610",
			location: "Winter Park, CO",
			venue: "Winter Park Resort",
			equipment: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "Talia & AJ",
			id: "877101187",
			location: "St. Petersburg, FL",
			venue: "The Birchwood / Sunken Gardens",
			equipment: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "Meridith & Connor",
			id: "713488531",
			location: "Chicago, IL",
			venue: "Green House Loft",
			equipment: ["Panasonic S1H", "DJI Air S2"],

			type: "Wedding",
		},
		{
			title: "Bolts Brew Fest",
			id: "877123147",
			location: "Tampa, FL",
			venue: "Amalie Arena",
			equipment: ["Panasonic S1H", "DJI Air S2"],

			type: "Commercial",
		},
	];

	const router = useRouter();
	return (
		<PageTransition>
			<div className="bg-slate-900 h-screen">
				<div className="grid grid-col-1">
					<NavBar />

					<Logo />
					<div className="flex justify-center items-center text-white mx-8 mb-14 text-center">
						<div style={{ fontFamily: "Poppins" }}>
							We are Grovefilm. We are boutique film makers that
							capture and create films to tell your stories.
						</div>
					</div>
				</div>
				<div className="justify-center items-center flex">
					<Swiper
						onInit={(swiper) => {
							setSwiper(swiper);
						}}
						slidesPerView={1}
						spaceBetween={25}
						// using "ratio" endpoints
						breakpoints={{
							"@0.75": {
								slidesPerView: 2,
								spaceBetween: 25,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 25,
							},
						}}
						modules={[Mousewheel, Scrollbar, Autoplay]}
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						scrollbar={false}
						mousewheel={true}
						speed={1000}
						onClick={() => {
							projectCtx.setProject(videos[swiper.clickedIndex]);
							router.push("/" + videos[swiper.clickedIndex].id);
						}}
					>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<img
								src="../static/Almery.jpg"
								className="rounded-3xl"
							/>
							<div
								style={{
									textShadow: ".25px .25px .25px #ba9467",
								}}
								className=" absolute z-10 text-6xl font-latienne-pro font-bold text-slate-900 mt-12"
							>
								<div>Almery</div>
								<div className="-my-5">&</div>
								<div>Zach</div>
							</div>
						</SwiperSlide>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<div
								style={{
									textShadow: ".25px .25px .25px #ba9467",
								}}
								className=" absolute z-10 text-6xl font-latienne-pro font-bold text-slate-900 mt-12"
							>
								<div>Christina</div>
								<div className="-my-4">&</div>
								<div>Eric</div>
							</div>
							<img
								src="../static/Christina.jpg"
								className="rounded-3xl"
							/>
						</SwiperSlide>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<div
								style={{
									textShadow: ".25px .25px .25px #ba9467",
								}}
								className=" absolute z-10 text-6xl font-latienne-pro font-bold text-slate-900 mt-12"
							>
								<div>Talia</div>
								<div className="-my-4">&</div>
								<div>AJ</div>
							</div>
							<img
								src="../static/Talia.jpg"
								className="rounded-3xl"
							/>
						</SwiperSlide>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<div
								style={{
									textShadow: ".25px .25px .25px #ba9467",
								}}
								className=" absolute z-10 text-6xl font-latienne-pro font-bold text-slate-900 mt-12"
							>
								<div>Meredith</div>
								<div className="-my-5">&</div>
								<div>Connor</div>
							</div>
							<img
								src="../static/Connor.jpg"
								className="rounded-3xl"
							/>
						</SwiperSlide>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<div
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
							</div>
							<img
								src="../static/stanley.jpg"
								className="rounded-3xl"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</PageTransition>
	);
};

export default Home;
