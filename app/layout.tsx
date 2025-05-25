import "./globals.css";
import type { Metadata } from "next";
import ProjectContextProvider from "@/ProjectContext";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
	title: "Grovefilm",
	description: "Boutique Film Makers",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* imports latienne pro font */}
				<link
					rel="stylesheet"
					href="https://use.typekit.net/heo3ekj.css"
				/>
			</head>
			<body className="bg-black">
				{/* react context provider for project details */}
				<ProjectContextProvider>{children}</ProjectContextProvider>
				<Analytics />
			</body>
		</html>
	);
}
