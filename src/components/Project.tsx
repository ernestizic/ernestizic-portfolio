"use client";

import type { Project } from "@/utils/types";
import { GoArrowUpRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface PropjectProps {
	project: Project;
	right: boolean;
}
const Project = ({ project, right }: PropjectProps) => {
	return (
		<div className={cn("flex gap-20", { "flex-row-reverse": right })}>
			<div className="flex-1">
				<header className="text-2xl font-semibold">{project.title}</header>
				<div className="flex flex-wrap items-center gap-2 mt-6 mb-4">
					{project.labels?.map((item, idx) => (
						<span
							key={idx}
							className="bg-background-dim block py-1 px-4 w-max rounded-2xl"
						>
							{item}
						</span>
					))}
				</div>

				<p>{project.description}</p>

				<div className="mt-8 flex items-center gap-10">
					{!project.isPrivate && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noreferrer"
							className="flex items-center justify-center gap-2 h-12 px-6 text-lg transition-all bg-[#b94c08] hover:bg-primary"
						>
							View Github
						</a>
					)}
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center gap-2 text-lg border-b border-primary py-1"
					>
						View project <GoArrowUpRight />
					</a>
				</div>
			</div>

			<div className="flex-1 h-[300px] relative">
				<Image
					src={project.projectMedia}
					alt={`${project.title} media`}
					fill
					className="object-contain"
				/>
			</div>
		</div>
	);
};

export default Project;
