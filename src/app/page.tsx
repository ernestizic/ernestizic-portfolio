import Contact from "@/components/Contact";
import ContentWrapper from "@/components/ContentWrapper";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />

			<div className="flex-1 mt-[72px]">
				<ContentWrapper>
					<div className="h-[calc(100vh-72px)] grid lg:grid-cols-2">
						<div className="flex items-center">
							<div className="flex flex-col gap-20">
								<div className="flex flex-col gap-6">
									<p className="text-4xl lg:text-5xl font-semibold flex items-end gap-2">
										Hello
										<span className="block size-4 bg-primary rounded-full mb-2" />
									</p>
									<div className="text-2xl lg:text-4xl relative">
										<span className="block h-0.5 w-[140px] bg-primary absolute bottom-2 -left-30" />
										<p className="ml-10">
											I&apos;m Isaac Ifeanyichukwu{" "}
											<span className="max-2xl:hidden">Ernest</span>
										</p>
									</div>
									<p className="text-3xl lg:text-5xl">
										<span className="max-2xl:hidden">Senior</span> Software
										Engineer
									</p>
								</div>

								<div className="flex gap-4">
									<a
										href="#contact"
										className="flex items-center justify-center gap-2 h-12 px-6 text-lg transition-all bg-[#b94c08] hover:bg-primary"
									>
										Contact me
									</a>
									<a
										href="/Isaac Ifeanyichukwu resume.pdf"
										className="bg-inherit border-2 border-primary hover:bg-primary flex items-center justify-center gap-2 h-12 px-6 text-lg transition-all"
										download
									>
										My Resume
									</a>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-center relative max-md:hidden">
							{/* Circle */}
							<div className="aspect-square w-3/4 rounded-full bg-[#112633] relative flex items-center overflow-visible">
								{/* Arrow line */}
								<div className="curved-arrow"></div>

								<div className="flex items-center justify-center w-full gap-6 text-2xl text-white">
									<a
										href="https://github.com/ernestizic"
										target="_blank"
										rel="noreferrer"
										className="icon-link"
									>
										<FaGithub />
									</a>
									<a
										href="https://linkedin.com/in/ernestizic"
										target="_blank"
										rel="noreferrer"
										className="icon-link"
									>
										<FaLinkedin />
									</a>
									<a
										href="https://twitter.com/ernestizic"
										target="_blank"
										rel="noreferrer"
										className="icon-link"
									>
										<BsTwitterX />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="text-center lg:w-[85%] m-auto lg:mt-40" id="about">
						<div className="lg:w-[500px] m-auto mb-10">
							<h2 className="text-[32px] lg:text-[40px] font-semibold">
								About Me
							</h2>
							<div className="max-w-[1205px] flex mx-auto mt-7">
								<span className="block h-0.5 w-full bg-primary" />
								<span className="block h-0.5 w-[300px]" />
								<span className="block h-0.5 w-full bg-primary" />
							</div>
						</div>

						<div className="leading-8 text-lg">
							<p>
								I’m a Frontend-Leaning Full-Stack Engineer with 4+ years
								experience building sleek, scalable, and intuitive web
								applications. I have a passion for building and contributing to
								solutions that solve real problems.
							</p>
							<p>
								I&apos;m not just about code, I&apos;m a mentor and team player,
								and I&apos;m always looking for ways to improve my craft and
								make development process more seamless and efficient.
							</p>
							<p>
								When I&apos;m not working, you&apos;d probably find me lost in a
								movie marathon or playing video games 😅
							</p>
						</div>
					</div>

					<FeaturedProjects />

					<Contact />
				</ContentWrapper>
			</div>

			<Footer />
		</div>
	);
}
