import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-background-dim h-[72px] min-h-[72px] flex items-center">
			<div className="flex items-center justify-center w-full gap-10 text-2xl text-white">
				<a
					href="https://github.com/ernestizic"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://linkedin.com/in/ernestizic"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://twitter.com/ernestizic"
					target="_blank"
					rel="noreferrer"
				>
					<BsTwitterX />
				</a>
			</div>
		</div>
	);
};

export default Footer;
