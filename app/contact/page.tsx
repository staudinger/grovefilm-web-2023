"use client";

import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {} from "@mui/material/colors";
import "@fontsource/poppins";
import { Email, Smartphone } from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";
import Logo from "@/components/Logo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { setDoc, doc, getFirestore } from "firebase/firestore";

const Contact = () => {
	//const db = getFirestore();
	const form: any = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState(Date.now().toString());

	const handleName = (e: any) => {
		setName(e.target.value);
	};
	const handleEmail = (e: any) => {
		setEmail(e.target.value);
	};
	const handlePhone = (e: any) => {
		setPhone(e.target.value);
	};
	const handleMessage = (e: any) => {
		setMessage(e.target.value);
	};
	const handleLocation = (e: any) => {
		setLocation(e.target.value);
	};
	const handleDate = (e: any) => {
		setDate(e.$M + 1 + "/" + e.$D + "/" + e.$y);
	};

	const sendMessage = async (e: any) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_pl23fgn",
				"template_9x4pgw7",
				form.current,
				"user_3WOMzznYJEfRl03WdkC0V"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		try {
			const createStamp = new Date();
			const datetime =
				createStamp.getMonth() +
				1 +
				"-" +
				createStamp.getDate() +
				"-" +
				createStamp.getFullYear() +
				" " +
				createStamp.getHours() +
				":" +
				createStamp.getMinutes() +
				":" +
				createStamp.getSeconds() +
				":" +
				createStamp.getMilliseconds();
			// const docRef = await setDoc(doc(db, "messages", datetime), {
			// 	name: name,
			// 	email: email,
			// 	phone: phone,
			// 	message: message,
			// 	location: location,
			// 	date: date,
			// 	created: datetime,
			// });
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		setName("");
		setEmail("");
		setPhone("");
		setLocation("");
		setDate(Date.now().toString());
		setMessage("");
	};

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
		<PageTransition>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<div className="bg-slate-900 h-screen">
					<ThemeProvider theme={theme}>
						<NavBar />
						{/* <div className=" -my-14 mx-2 flex justify-center items-center">
						<img src="../../static/GFSquareOrange.PNG" />
					</div> */}
						{/* <div className="flex justify-center">
						<div
							style={{
								color: "#ba9467",
								// fontFamily: "latienne-pro",
								// fontStyle: "normal",
								// fontWeight: 400,
							}}
							className="tracking-tighter font-latienne-pro text-white font-bold text-7xl"
						>
							Grove
						</div>
						<div
							style={{ letterSpacing: -7, color: "#ba9467" }}
							className="font-latienne-pro text-white font-bold text-7xl"
						>
							f
						</div>
						<div
							style={{ paddingTop: 1, color: "#ba9467" }}
							className="tracking-tighter font-latienne-pro text-white font-bold text-7xl "
						>
							i
						</div>
						<div
							style={{ color: "#ba9467" }}
							className="tracking-tighter font-latienne-pro text-white font-bold text-7xl "
						>
							lm
						</div>
					</div> */}
						<Logo />
						{/* <div className="ml-6 -mt-1 grid grid-cols-2"> */}
						<div className="-mt-1">
							{/* <div className="col-start-1 col-span-2 flex justify-center"> */}
							<form ref={form} onSubmit={sendMessage}>
								<div className="flex justify-center">
									<TextField
										name="name"
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
										onChange={handleName}
										value={name}
									/>
								</div>
								<div className="flex justify-center">
									<TextField
										name="email"
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
										onChange={handleEmail}
										value={email}
									/>
								</div>
								<div className="flex justify-center">
									<TextField
										name="phone"
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
										onChange={handlePhone}
										value={phone}
									/>
								</div>
								<div className="flex justify-center">
									<TextField
										name="location"
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
										label="Event Location"
										variant="standard"
										placeholder="Tampa, FL"
										onChange={handleLocation}
										value={location}
									/>
								</div>
								<div className="flex justify-center mt-8">
									<MobileDatePicker
										sx={{
											input: {
												color: "#ba9467",
												fontFamily: "Poppins",
											},
											"& .MuiInputLabel-root ": {
												color: "white",
												fontFamily: "Poppins",
											},
											"& .MuiOutlinedInput-root": {
												"& fieldset": {
													borderColor: "white",
												},
											},
										}}
										defaultValue={dayjs(Date.now())}
										closeOnSelect
										label="Event Date"
										onChange={handleDate}
										slotProps={{
											textField: { name: "date" },
										}}
									/>
								</div>
								<div
									className="flex justify-center
							text-4xl mt-4 tracking-tight"
									style={{
										color: "#ba9467",
										fontFamily: "Poppins",
									}}
								>
									Dear Grovefilm,
								</div>
								<div className="flex justify-center">
									<TextField
										name="message"
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
										onChange={handleMessage}
										value={message}
									/>
								</div>
								<div className="mb-12 flex justify-center">
									<Button
										sx={{}}
										variant="text"
										type="submit"
									>
										Send Email
									</Button>
								</div>
							</form>
						</div>{" "}
						<div
							className="text-white font-bold grid grid-cols-1 mx-8"
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
			</LocalizationProvider>
		</PageTransition>
	);
};

export default Contact;
