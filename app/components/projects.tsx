import { FEATURED_PROJECTS } from "app/lib/constants";
import Link from "next/link";

export function FeatureProjects() {
	return (
		<div>
			{FEATURED_PROJECTS.map((project, idx) => (
				<div className="my-3" key={idx}>
					<Link href={`${project.github}`} target="_blank">
						<h3 className="mb-2">{project.name}</h3>
					</Link>
					<p className="text-neutral-600 dark:text-neutral-400">{project.description}</p>
				</div>
			))}
		</div>
	);
}
