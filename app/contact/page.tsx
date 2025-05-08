"use client";

import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {} from "@mui/material/colors";
import "@fontsource/poppins";
import { Email, Smartphone, PlaceRounded } from "@mui/icons-material";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs from "dayjs";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Almarai } from "next/font/google";
import { useRouter } from "next/navigation";

const almaraiLight = Almarai({
	subsets: ["arabic"],
	weight: "300",
});
const almaraiBold = Almarai({
	subsets: ["arabic"],
	weight: "800",
});

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [location, setLocation] = useState("");
	const [date, setDate] = useState(Date.now().toString());
	const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

	const firebaseConfig = {
		apiKey: "AIzaSyBmhU0bopRsBdDwoGw-9ZNFRxUb1n_m6RA",
		authDomain: "grovefilm-6532c.firebaseapp.com",
		projectId: "grovefilm-6532c",
		storageBucket: "grovefilm-6532c.appspot.com",
		messagingSenderId: "748922207761",
		appId: "1:748922207761:web:8de82e193aea7509063bb0",
		measurementId: "G-45FFZFRH0S",
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore();
	const form: any = useRef();
	const router = useRouter();

	const yellow = "#fdf995";
	const red = "#D11E06";
	const orange = "#ffa128";

	const formatPhoneNumber = (value: any) => {
		const cleanedValue = value.replace(/\D/g, "");
		let formattedValue = "";

		if (cleanedValue.length <= 3) {
			formattedValue = cleanedValue;
		} else if (cleanedValue.length <= 6) {
			formattedValue = `(${cleanedValue.slice(
				0,
				3
			)}) ${cleanedValue.slice(3, 6)}`;
		} else {
			formattedValue = `(${cleanedValue.slice(
				0,
				3
			)}) ${cleanedValue.slice(3, 6)}-${cleanedValue.slice(6, 10)}`;
		}
		setFormattedPhoneNumber(formattedValue);

		return formattedValue;
	};

	const unformatPhoneNumber = (str: any) => {
		return "1" + str.replace(/[-()\s]/g, "");
	};

	const handleName = (e: any) => {
		setName(e.target.value);
	};
	const handleEmail = (e: any) => {
		setEmail(e.target.value);
	};
	const handlePhone = (e: any) => {
		setPhone(unformatPhoneNumber(e.target.value));
		formatPhoneNumber(e.target.value);
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
		console.log(form.current);

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

			const docRef = await setDoc(doc(db, "messages", datetime), {
				name: name,
				email: email,
				phone: phone,
				message: message,
				location: location,
				date: date,
				created: datetime,
			});
		} catch (e) {
			console.error("Error adding document: ", e);
		}

		setName("");
		setEmail("");
		setPhone("");
		setLocation("");
		setDate(Date.now().toString());
		setMessage("");
		setFormattedPhoneNumber("");
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: "#FFFFFF",
			},
			secondary: {
				main: "#ba9467",
			},
		},
	});

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<div className="bg-black">
				<ThemeProvider theme={theme}>
					<NavBar zIndex={20} />
					<div className=" pl-6 z-20 xl:w-4/5 flex fixed">
						<Button
							sx={{ color: "#D11E06" }}
							onClick={() => {
								router.push("/");
							}}
						>
							<Logo color="#ba9467" />
						</Button>
					</div>
					<div className="h-screen flex justify-center items-center">
						<form ref={form} onSubmit={sendMessage}>
							<div className="w-full flex justify-center pb-4 xl:w-full">
								<TextField
									name="name"
									sx={{
										input: {
											color: yellow,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										width: 200,

										"& .MuiInputLabel-root": {
											color: orange,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										"& .MuiInput-underline:before": {
											borderBottomColor: orange,
										},
										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
										},

										"& .MuiFormLabel-root": {
											"&.MuiInputLabel-root": {
												"&.Mui-focused": {
													color: orange,
												},
											},
										},
									}}
									label="Full Name"
									placeholder="Chris P Bacon"
									variant="standard"
									value={name}
									onChange={handleName}
								/>
							</div>

							<div className="w-full flex justify-center pb-4  xl:w-full">
								<TextField
									name="email"
									sx={{
										input: {
											color: yellow,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										width: 200,

										"& .MuiInputLabel-root": {
											color: orange,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										"& .MuiInput-underline:before": {
											borderBottomColor: orange,
										},
										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
										},

										"& .MuiFormLabel-root": {
											"&.MuiInputLabel-root": {
												"&.Mui-focused": {
													color: orange,
												},
											},
										},
									}}
									label="Email"
									variant="standard"
									value={email}
									onChange={handleEmail}
								/>
							</div>

							<div className="w-full flex justify-center pb-4 xl:w-full">
								<TextField
									name="phone"
									sx={{
										input: {
											color: yellow,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										width: 200,

										"& .MuiInputLabel-root": {
											color: orange,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										"& .MuiInput-underline:before": {
											borderBottomColor: orange,
										},
										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
										},

										"& .MuiFormLabel-root": {
											"&.MuiInputLabel-root": {
												"&.Mui-focused": {
													color: orange,
												},
											},
										},
									}}
									label="Phone Number"
									placeholder="(123) 456-7890"
									variant="standard"
									value={formattedPhoneNumber}
									onChange={handlePhone}
								/>
							</div>

							<div className="w-full flex justify-center pb-4 xl:w-full">
								<TextField
									name="location"
									sx={{
										input: {
											color: yellow,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										width: 200,

										"& .MuiInputLabel-root": {
											color: orange,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										"& .MuiInput-underline:before": {
											borderBottomColor: orange,
										},
										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
										},

										"& .MuiFormLabel-root": {
											"&.MuiInputLabel-root": {
												"&.Mui-focused": {
													color: orange,
												},
											},
										},
									}}
									label="Event Location"
									variant="standard"
									value={location}
									onChange={handleLocation}
								/>
							</div>
							<div className="w-full flex justify-center pb-4 xl:w-full">
								<MobileDatePicker
									sx={{
										input: {
											color: yellow,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										width: 200,

										"& .MuiInputLabel-root": {
											color: orange,
											fontWeight: "bold",
											fontSize: "1.25rem",
										},
										"& .MuiOutlinedInput-root": {
											"& fieldset": {
												borderColor: orange,
											},
										},
										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
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
								className={`${almaraiBold.className} text-red uppercase flex justify-center text-3xl mt-4 tracking-tight`}
							>
								Dear Grovefilm,
							</div>
							<div className="flex justify-center">
								<TextField
									name="message"
									sx={{
										width: "250px",
										// fontSize: "1.25rem",

										"& .MuiInput-underline:before": {
											borderBottomColor: orange,
										},

										"& .MuiInput-underline:after": {
											borderBottomColor: yellow,
										},
										"& .MuiInput-input": {
											color: yellow,
											fontSize: "1.25rem",
										},
									}}
									id="standard-basic"
									label=""
									placeholder="Drop us a line..."
									variant="standard"
									multiline
									onChange={handleMessage}
									value={message}
								/>
							</div>
							<div className="uppercase mb-12 mt-8 flex justify-center">
								<Button
									style={{
										color: yellow,
										borderColor: yellow,
										borderRadius: "1.5rem",
										fontWeight: "bold",
										borderWidth: "2px",
										paddingLeft: 25,
										paddingRight: 25,
										marginLeft: 5,
									}}
									variant="outlined"
									type="submit"
								>
									Send
								</Button>
							</div>
						</form>
					</div>
					<div
						className={`${almaraiBold.className} uppercase fixed bottom-0 mb-8 font-bold text-red w-full pr-8`}
					>
						<div className="pl-8">
							<Email /> &mdash; peter@grovefilm.com
						</div>
						<div className="flex flex-wrap">
							<div className="pl-8 w-1/2">
								<Smartphone /> &mdash; 863 207 8684
							</div>
							<span className="flex xl:justify-end justify-start xl:pr-8 pl-8 xl:w-1/2 w-full">
								<PlaceRounded /> &mdash; ST PETE FL / BEYOND
							</span>
						</div>
					</div>
				</ThemeProvider>
			</div>
		</LocalizationProvider>
	);
};

export default Contact;
