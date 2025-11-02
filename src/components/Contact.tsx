import { BiMailSend, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
	return (
		<div id="contact" className="my-40 grid lg:grid-cols-2 lg:gap-30">
			<div>
				<div className="text-4xl relative mb-12">
					<span className="block h-0.5 w-[140px] bg-primary absolute bottom-2 -left-30" />
					<header className="ml-10">Contacts</header>
				</div>

				<p className="font-semibold max-md:text-4xl text-5xl mb-5">
					Have a project?
				</p>
				<p className="font-semibold max-md:text-4xl text-5xl">Lets talk!</p>
			</div>

			<div>
				<ul className="flex flex-col gap-12 mt-20">
					<li className="flex gap-4 text-lg">
						<a
							href="mailto:ieifeanyichukwu@gmail.com"
							className="flex items-center gap-4"
						>
							<BiMailSend size={24} /> ieifeanyichukwu@gmail.com
						</a>
					</li>
					<li className="flex gap-4 text-lg">
						<a
							href="https://github.com/ernestizic"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-4"
						>
							<FaGithub size={24} /> github.com/ernestizic
						</a>
					</li>
					<li className="flex gap-4 text-lg">
						<a
							href="https://linkedin.com/in/ernestizic"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-4"
						>
							<FaLinkedin size={24} /> linkedin.com/in/ernestizic
						</a>
					</li>
					<li className="flex gap-4 text-lg">
						<BiPhone size={24} /> +234 806 740 9251
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Contact;
