import React, { useState, useEffect } from "react";
// import './fade.css';

const FadeText = ({ text, duration = 1000 }: any) => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(false); // Fade in
		const timer = setTimeout(() => setVisible(true), duration); // Fade out after `duration`

		return () => clearTimeout(timer);
	}, [text, duration]);

	return <div className={`fade-text ${visible ? "show" : ""}`}>{text}</div>;
};

export default FadeText;
