import "./global.css";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Somtochukwu",
		template: "%s | Next.js Portfolio Starter",
	},
	description: "Software Developer",
	openGraph: {
		title: "Somtochukwu",
		description: "Software Developer",
		url: baseUrl,
		siteName: "Sommmtoooo",
		locale: "en_GB",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");
const font = Bricolage_Grotesque({
	weight: "500",
	style: ["normal"],
	display: "block",
	subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cx("text-black bg-white dark:text-white dark:bg-black", font.className)}>
			<body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Footer />
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}
