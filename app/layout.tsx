import "./globals.css";
import type { Metadata } from "next";
import ProjectContextProvider from "@/ProjectContext";

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
			<body className="bg-slate-900">
				{/* react context provider for project details */}
				<ProjectContextProvider>{children}</ProjectContextProvider>
			</body>
		</html>
	);
}
