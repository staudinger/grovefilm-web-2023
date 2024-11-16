"use client";

import * as React from "react";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Almarai } from "next/font/google";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});
const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

export default function NavBar() {
	const router = useRouter();

	return (
		<div className="">
			<AppBar
				color="transparent"
				position="fixed"
				style={{ boxShadow: "none" }}
			>
				<div className=" justify-center xl:justify-end items-center flex pr-4">
					<Button
						onClick={() => {
							router.push("/home");
						}}
					>
						<img src="../static/handsWhite.png" width="100px" />
					</Button>
					<Button
						className={`${almaraiBold.className} uppercase`}
						onClick={() => {
							router.push("/manifesto");
						}}
						sx={{
							color: "#ba9467",
							fontWeight: "bold",
							textShadow: "1px 1px 2px #0f172a",
						}}
					>
						Manifesto
					</Button>

					<Button
						className={`${almaraiBold.className} uppercase`}
						onClick={() => {
							router.push("/contact");
						}}
						sx={{
							color: "#ba9467",
							fontWeight: "bold",
							textShadow: "1px 1px 2px #0f172a",
						}}
					>
						Contact
					</Button>
				</div>
			</AppBar>
		</div>
	);
}
