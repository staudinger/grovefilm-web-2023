import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProjectContextProvider from "@/ProjectContext";

const inter = Inter({ subsets: ["latin"] });

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
				<link
					rel="stylesheet"
					href="https://use.typekit.net/heo3ekj.css"
				/>
			</head>
			<body className={inter.className}>
				{" "}
				<ProjectContextProvider>{children}</ProjectContextProvider>
			</body>
		</html>
	);
}
