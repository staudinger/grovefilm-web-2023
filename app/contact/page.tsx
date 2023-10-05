"use client";

import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {} from "@mui/material/colors";
import "@fontsource/poppins";
import { Email, Smartphone } from "@mui/icons-material";
import NavBar from "@/components/NavBar";

const Contact = () => {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#FFFFFF",
				// light: will be calculated from palette.primary.main,
				// dark: will be calculated from palette.primary.main,
				// contrastText: will be calculated to contrast with palette.primary.main
			},
			secondary: {
				main: "#ba9467",
			},
		},
	});
	return (
		<div className="bg-slate-900 h-screen">
			<ThemeProvider theme={theme}>
				<NavBar />
				<div className=" -my-14 mx-2 flex justify-center items-center">
					<img src="../../static/GFSquareOrange.PNG" />
				</div>
				<div className="ml-6 -mt-16">
					<TextField
						sx={{
							input: { color: "#ba9467", fontFamily: "Poppins" },

							"& .MuiInputLabel-root": {
								color: "white",
								fontFamily: "Poppins",
							},
							"& .MuiInput-underline:before": {
								borderBottomColor: "white",
							},
						}}
						color="primary"
						id="standard-basic"
						label="Name"
						variant="standard"
					/>
					<TextField
						sx={{
							input: { color: "#ba9467", fontFamily: "Poppins" },

							"& .MuiInputLabel-root": {
								color: "white",
								fontFamily: "Poppins",
							},
							"& .MuiInput-underline:before": {
								borderBottomColor: "white",
							},
						}}
						color="primary"
						id="standard-basic"
						label="Email"
						variant="standard"
					/>
					<TextField
						sx={{
							input: { color: "#ba9467", fontFamily: "Poppins" },

							"& .MuiInputLabel-root": {
								color: "white",
								fontFamily: "Poppins",
							},
							"& .MuiInput-underline:before": {
								borderBottomColor: "white",
							},
						}}
						color="primary"
						id="standard-basic"
						label="Phone"
						variant="standard"
					/>{" "}
					<div
						className="text-3xl mt-4"
						style={{ color: "#ba9467", fontFamily: "Poppins" }}
					>
						Dear Grovefilm,
					</div>
					<div className="mr-6">
						<TextField
							sx={{
								// input: { color: "#ba9467" },

								// "& .MuiInputLabel-root": {
								// 	color: "white",
								// 	fontFamily: "Poppins",
								// },
								"& .MuiInput-underline:before": {
									borderBottomColor: "white",
								},
								"& .MuiInput-input": {
									color: "#ba9467",
									fontFamily: "Poppins",
								},
							}}
							color="primary"
							id="standard-basic"
							label=""
							placeholder="Drop us a line..."
							variant="standard"
							multiline
							fullWidth
						/>
					</div>
					<div className="mb-12 flex justify-end mr-4">
						<Button sx={{}} variant="text">
							Send Email
						</Button>
					</div>
					<div
						className="text-white font-bold grid grid-cols-1"
						style={{ fontFamily: "Poppins" }}
					>
						<div>
							<Email /> &mdash; peter@grovefilm.com
						</div>
						<div>
							<Smartphone /> &mdash; 863 207 8684
						</div>
					</div>
				</div>{" "}
			</ThemeProvider>
		</div>
	);
};

export default Contact;
