import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="stylesheet"
						href="https://use.typekit.net/ypc0ork.css"

						//href="https://p.typekit.net/p.css?s=1&k=ypc0ork&ht=tk&f=23550.23555.23556.23559&a=3341263&app=typekit&e=css"
					/>
					{/* <style data-href="https://use.typekit.net/ypc0ork&ht.css">
						@import
						url("https://p.typekit.net/p.css?s=1&k=ypc0ork&ht=tk&f=23550.23555.23556.23559&a=3341263&app=typekit&e=css");
					</style> */}
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
