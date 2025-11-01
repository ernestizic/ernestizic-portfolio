import { cn } from "@/lib/utils";
import React from "react";

const ContentWrapper = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("w-full max-w-[calc(100%-200px)] 2xl:px-0 2xl:max-w-7xl m-auto", className)}>
			{children}
		</div>
	);
};

export default ContentWrapper;
