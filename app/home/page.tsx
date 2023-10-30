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

const Home = (ref: React.ForwardedRef<HTMLDivElement>) => {
	const [checked, setChecked] = useState(false);

	const [swiper, setSwiper] = useState(null);
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
		<PageTransition ref={ref}>
			<div className="bg-slate-900 h-screen">
				<div className="grid grid-col-1">
					<NavBar />
					{/* <div className=" -my-14 mx-2 flex justify-center items-center">
						<img src="../../static/GFSquareOrange.PNG" />
					</div>{" "} */}
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
							{/* <ImageListItem
								key="Subheader"
								cols={2}
							></ImageListItem> */}

							<img
								src="../static/Almery.jpg"
								className="rounded-3xl"
							/>
							<ImageListItemBar
								sx={{
									backgroundColor: "transparent",
									"& .MuiImageListItemBar-title": {
										fontWeight: "bold",
										color: "#0f172a",
										// color: "black",

										fontFamily: "latienne-pro",
										fontSize: "55px",
										textShadow: ".25px .25px .25px #ba9467",
										paddingBottom: 60,
										paddingTop: 1,

										// paddingBottom: 1,
										// display: "flex",
									},
									// "& .MuiImageListItemBar-subtitle": {
									// 	fontWeight: "bold",
									// 	color: "#0f172a",
									// 	fontFamily: "Poppins",
									// 	fontSize: "18px",
									// 	paddingTop: 2,
									// 	paddingBottom: 60,
									// 	// textShadow: ".5px .5px .55px black",
									// 	display: "flex",
									// },
								}}
								title={
									<div>
										<div>Almery</div>
										<div className="my-2">&</div>
										<div>Zach</div>
									</div>
								}
								// subtitle="Wedding"
								// actionIcon={
								// 	<IconButton
								// 		sx={{ color: "rgba(255, 255, 255, 0.54)" }}
								// 	>
								// 		<InfoIcon />
								// 	</IconButton>
								// }
							/>
						</SwiperSlide>
						<SwiperSlide
							style={{
								display: "flex",
								justifyContent: "center",
								textAlign: "center",
							}}
						>
							<ImageListItemBar
								sx={{
									backgroundColor: "transparent",
									"& .MuiImageListItemBar-title": {
										fontWeight: "bold",
										// color: "#ba9467",
										color: "#0f172a",
										fontFamily: "latienne-pro",
										fontSize: "55px",
										textShadow: ".25px .25px .25px #ba9467",
										//textShadow: "1px 1px 1px #0f172a",

										paddingBottom: 55,
										paddingTop: 2,
										// display: "flex",
									},
								}}
								title={
									<div>
										<div>Christina</div>
										<div className="my-3">&</div>
										<div>Eric</div>
									</div>
								}
							/>{" "}
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
							<ImageListItemBar
								sx={{
									backgroundColor: "transparent",
									"& .MuiImageListItemBar-title": {
										fontWeight: "bold",
										color: "#0f172a",
										fontFamily: "latienne-pro",
										fontSize: "60px",
										textShadow: ".25px .25px .25px #ba9467",
										// textShadow: "1px 1px 1px #ba9467",
										paddingBottom: 55,
										paddingTop: 2,
									},
								}}
								// title="Talia & AJ"
								title={
									<div>
										<div>Talia</div>
										<div className="my-4">&</div>
										<div>AJ</div>
									</div>
								}
							/>{" "}
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
							<ImageListItemBar
								sx={{
									backgroundColor: "transparent",
									"& .MuiImageListItemBar-title": {
										fontWeight: "bold",
										color: "#0f172a",
										fontFamily: "latienne-pro",
										fontSize: "50px",
										textShadow: ".25px .25px .25px #ba9467",

										paddingBottom: 5,
										paddingTop: 1,
									},
								}}
								title={
									<div>
										<div>Conner</div>
										<div className="my-1">&</div>
										<div>Meredith</div>
									</div>
								}
							/>{" "}
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
							<ImageListItemBar
								sx={{
									backgroundColor: "transparent",
									"& .MuiImageListItemBar-title": {
										fontWeight: "bold",
										color: "#0f172a",
										fontFamily: "latienne-pro",
										fontSize: "50px",
										textShadow: ".25px .25px .25px #ba9467",

										paddingBottom: 5,
										paddingTop: 1,
									},
								}}
								title={
									<div>
										<div>Bolts</div>
										<div className="my-3">Brew</div>
										<div>Fest</div>
									</div>
								}
							/>{" "}
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
