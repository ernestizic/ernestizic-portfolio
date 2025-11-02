import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	variant?: "outline" | "default";
}

const Button = ({
	children,
	className,
	variant = "default",
	...props
}: ButtonProps) => {
	const btnVariants = {
		outline: "bg-inherit border-2 border-primary hover:bg-primary",
		default: "bg-[#b94c08] hover:bg-primary text-inner",
	};

	return (
		<button
			className={cn(
				`flex items-center justify-center gap-2 h-12 px-6 text-lg transition-all disabled:opacity-50 disabled:pointer-events-none`,
				btnVariants[variant],
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
