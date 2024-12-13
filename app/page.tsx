import { BlogPosts } from "app/components/posts";
import { FeatureProjects } from "./components/projects";
import Image from "next/image";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tight">Somtochukwu</h1>
			<p className="mb-4">
				{`Hi there, I am Somtochukwu, a software developer with a thinkpad and a heart for solving problem with software.`}
			</p>
			<div className="my-8">
				<h2 className="mb-4 text-xl font-medium tracking-tighter">Writing</h2>
				<BlogPosts />
			</div>

			<div className="my-8">
				<h2 className="mb-4 text-xl font-medium tracking-tighter">Featured Project</h2>
				<FeatureProjects />
			</div>
		</section>
	);
}
