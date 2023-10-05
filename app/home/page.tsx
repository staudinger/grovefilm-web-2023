"use client";

import NavBar from "@/components/NavBar";
import { Fade } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "@fontsource/poppins";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const Home = () => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		//setChecked((prev) => !prev);
	};
	return (
		<div className="bg-slate-900 h-screen">
			<div className="grid grid-col-1">
				<NavBar />
				<div className=" -my-14 mx-2 flex justify-center items-center">
					<img src="../../static/GFSquareOrange.PNG" />
				</div>{" "}
				<div className="flex justify-center items-center text-white mx-8 mb-14 ">
					<div style={{ fontFamily: "Poppins" }}>
						We are Grovefilm. We are boutique film makers that
						capture and create films to tell your stories.
					</div>
				</div>
			</div>
			<div className="justify-center items-center flex">
				<Swiper
					modules={[Scrollbar, Mousewheel]}
					mousewheel={true}
					spaceBetween={0}
					slidesPerView={1}
					scrollbar={{ draggable: true }}
					speed={600}
					loop={true}
				>
					<SwiperSlide>
						<ImageListItem key="Subheader" cols={2}></ImageListItem>

						<img
							//src="../static/jessica.jpg"
							src={`${"../static/jessica.jpg"}?w=248&fit=crop&auto=format`}
						/>
						<ImageListItemBar
							sx={{
								backgroundColor: "transparent",
								"& .MuiImageListItemBar-title": {
									fontWeight: "bold",
									color: "#ba9467",
									fontFamily: "Poppins",
								},
							}}
							title="Charlie & Jessica"
							// actionIcon={
							// 	<IconButton
							// 		sx={{ color: "rgba(255, 255, 255, 0.54)" }}
							// 	>
							// 		<InfoIcon />
							// 	</IconButton>
							// }
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="../static/stanley.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="../static/acrobat.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="../static/eric.jpg" />
					</SwiperSlide>{" "}
				</Swiper>
			</div>
		</div>
	);
};

export default Home;
