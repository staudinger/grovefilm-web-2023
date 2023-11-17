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
		<React.Fragment>
			<CssBaseline />
			{/* <HideOnScroll> */}
			<AppBar
				color="transparent"
				position="fixed"
				// sx={{ top: "auto", bottom: 0 }}
			>
				<div className="justify-center items-center flex">
					<Button
						onClick={() => {
							router.push("/home");
						}}
					>
						<img src="../static/handsWhite.png" width="100px" />
					</Button>
					<Button
						onClick={() => {
							router.push("/manifesto");
						}}
						sx={{
							color: "#ba9467",
							fontFamily: "Poppins",
							fontWeight: "bold",
						}}
					>
						Manifesto
					</Button>

					<Button
						onClick={() => {
							router.push("/contact");
						}}
						sx={{
							color: "#ba9467",
							fontFamily: "Poppins",
							fontWeight: "bold",
						}}
					>
						Contact
					</Button>
				</div>
			</AppBar>
			{/* </HideOnScroll> */}
			<Toolbar />
		</React.Fragment>
	);
}
