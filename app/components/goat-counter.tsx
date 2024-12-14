"use client";
import { useEffect } from "react";

const GoatAnalystics = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "//gc.zgo.at/count.js";
		script.async = true;
		script.setAttribute("data-goatcounter", "https://sommmtoooo.goatcounter.com/count");
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return null;
};

export default GoatAnalystics;
