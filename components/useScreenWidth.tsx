import { useEffect, useState } from "react";

const useScreenWidth = () => {
	const windowCheck = () => {
		if (typeof window !== "undefined") {
			return window.innerWidth;
		}
	};
	const [screenWidth, setScreenWidth] = useState(windowCheck);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const handleResize = () => {
				setScreenWidth(window.innerWidth);
			};

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	}, []);

	return screenWidth;
};

export default useScreenWidth;
