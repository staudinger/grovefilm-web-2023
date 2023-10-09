"use client";

import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {} from "@mui/material/colors";
import "@fontsource/poppins";
import { Email, Smartphone } from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

const Contact = (ref: React.ForwardedRef<HTMLDivElement>) => {
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
		<PageTransition ref={ref}>
			<div className="bg-slate-900 h-screen">
				<ThemeProvider theme={theme}>
					<NavBar />
					<div className=" -my-14 mx-2 flex justify-center items-center">
						<img src="../../static/GFSquareOrange.PNG" />
					</div>
					{/* <div className="ml-6 -mt-1 grid grid-cols-2"> */}
					<div className="-mt-1">
						{/* <div className="col-start-1 col-span-2 flex justify-center"> */}
						<div className="flex justify-center">
							<TextField
								sx={{
									input: {
										color: "#ba9467",
										fontFamily: "Poppins",
									},

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
						</div>
						<div className="flex justify-center">
							<TextField
								sx={{
									input: {
										color: "#ba9467",
										fontFamily: "Poppins",
									},

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
						</div>
						<div className="flex justify-center">
							<TextField
								sx={{
									input: {
										color: "#ba9467",
										fontFamily: "Poppins",
									},

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
							/>
						</div>
						<div
							className="flex justify-center
							text-3xl mt-4"
							style={{
								color: "#ba9467",
								fontFamily: "Poppins",
							}}
						>
							Dear Grovefilm,
						</div>
						<div className="flex justify-center">
							<TextField
								sx={{
									width: "250px",

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
							/>
						</div>
						<div className="mb-12 flex justify-center">
							<Button sx={{}} variant="text">
								Send Email
							</Button>
						</div>
					</div>{" "}
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
				</ThemeProvider>
			</div>
		</PageTransition>
	);
};

export default Contact;
