import { BlogPosts } from "app/components/posts";
import { FeatureProjects } from "./components/projects";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tight">Somtochukwu</h1>
			<p className="mb-4">
				{`Hi there! I’m Somtochukwu, a software developer (and proud ThinkPad lover) with a passion for solving problems through software. When I’m not immersed in code, you’ll often find me reading, exploring the art of frames and shots, or experimenting on Bandlab. I’m ardent to crafting clean, elegant, and efficient software, which I believe contributes to me being different, as this "devotion" allows me utilise better solution to problems.`}{" "}
			</p>
			<div className="my-8">
				<h2 className="mb-4 text-xl font-medium tracking-tighter">Writing</h2>
				<BlogPosts />
			</div>

			<div className="my-8">
				<h2 className="mb-2 text-xl font-medium tracking-tighter">Featured Project</h2>
				<p className="mb-4 text-neutral-700 dark:text-neutral-500">
					Most of my projects are tucked away in private repos (as they do not solve problems but rather are invaluable stepping stones to my journey as a better developer).
				</p>

				<FeatureProjects />
			</div>
		</section>
	);
}
