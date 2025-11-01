import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => {
	return (
		<div className="h-[72px] flex items-center fixed w-full top-0 z-10 bg-background">
			<ContentWrapper>
				<div className="flex items-center justify-between">
					<Link href="/" className="font-semibold text-2xl">
						Ernest <span className="font-medium">Isaac</span>
					</Link>

					<nav>
						<ul className="text-lg flex gap-6">
							<li>
								<Link href="/#about">About</Link>
							</li>
							<li>
								<Link href="/#projects">Projects</Link>
							</li>
							<li>
								<Link href="/#contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Navbar;
