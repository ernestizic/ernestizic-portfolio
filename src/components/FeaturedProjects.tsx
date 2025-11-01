import { projects } from "@/utils/constants";
import Project from "./Project";

const FeaturedProjects = () => {
	return (
		<div className="my-50">
			<header className="text-center">
				<h2 className="text-[32px] lg:text-[40px] font-semibold">
					Featured projects
				</h2>
				<div className="flex flex-col items-center gap-2 mt-7">
					<span className="block h-[50px] w-0.5 bg-primary" />
					<span className="block size-1 rounded-full bg-primary" />
				</div>
			</header>

			<div className="flex flex-col gap-30 mt-20">
				{projects.map((p, idx) => (
					<Project key={idx} right={(idx + 1) % 2 === 0} project={p} />
				))}
			</div>
		</div>
	);
};

export default FeaturedProjects;
