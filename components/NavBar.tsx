"use client";

import * as React from "react";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { Almarai } from "next/font/google";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});

export default function NavBar(props: any) {
	const { zIndex } = props;

	const router = useRouter();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [moreMenuAnchor, setMoreMenuAnchor] =
		React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseMoreMenu = () => {
		setMoreMenuAnchor(null);
	};

	const pages = [
		// {
		// 	title: "MANIFESTO",
		// 	onClick: () => {
		// 		handleCloseNavMenu;
		// 		router.push("/manifesto");
		// 	},
		// },

		{
			title: "CONTACT",
			onClick: () => {
				handleCloseNavMenu;
				router.push("/contact");
			},
		},
	];

	return (
		<AppBar
			color="transparent"
			position="fixed"
			className="bg-transparent"
			style={{ boxShadow: "none", zIndex: zIndex }}
		>
			<div className="justify-center xl:justify-end items-center flex xl:py-6 py-4 xl:pr-4 pr-0">
				<div className="xl:hidden flex justify-end w-full">
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
						sx={{
							color: "#D11E06",
							textShadow: "2px 1px 2px black",
						}}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
							"& .MuiPaper-root": {
								// background: "rgb(212, 103, 76, .7)",
								background: "rgb(0, 0, 0, .6)",
							},
							"& .MuiList-root": {
								color: "#D11E06",
								textShadow: "2px 1px .5px #ffa128",
							},
						}}
					>
						{pages.map((page, index) => (
							<MenuItem key={index} onClick={page.onClick}>
								<Typography sx={{ textAlign: "center" }}>
									{page.title}
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</div>
				<div className="xl:flex hidden">
					{/* <Button
						className={`${almaraiLight.className}`}
						onClick={() => {
							router.push("/manifesto");
						}}
						sx={{
							fontSize: "1.25rem",
							color: "#D11E06",
							textShadow: "2px 1px .5px #ffa128",
						}}
					>
						Manifesto
					</Button> */}

					<Button
						className={`${almaraiLight.className}`}
						onClick={() => {
							router.push("/contact");
						}}
						sx={{
							fontSize: "1.25rem",
							color: "#D11E06",
							textShadow: "2px 1px .5px #ffa128",
						}}
					>
						Contact
					</Button>
				</div>
			</div>
		</AppBar>
	);
}
