"use client";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/heo3ekj.css"
					/>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/vsh8rwa.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
