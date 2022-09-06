import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import Cards from "../components/Cards";

const Home = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	const [videoUrl, setVideoUrl] = useState("");
	return (
		<div className="w3-black">
			<nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
				{/* <img src="/images/profile.jpg" style={{"width":"100%"}} /> */}
				<h3>Portfolio</h3>
				<a
					href="#"
					className="w3-bar-item w3-button w3-padding-large w3-black"
				>
					<i className="fa fa-home w3-xxlarge"></i>
					<p>HOME</p>
				</a>
				<a
					href="#about"
					className="w3-bar-item w3-button w3-padding-large w3-hover-black"
				>
					<i className="fa fa-user w3-xxlarge"></i>
					<p>ABOUT</p>
				</a>
				<a
					href="#photos"
					className="w3-bar-item w3-button w3-padding-large w3-hover-black"
				>
					<i className="fa fa-tasks w3-xxlarge"></i>
					<p>Projects</p>
				</a>
				<a
					href="#contact"
					className="w3-bar-item w3-button w3-padding-large w3-hover-black"
				>
					<i className="fa fa-envelope w3-xxlarge"></i>
					<p>CONTACT</p>
				</a>
			</nav>

			<div
				className="w3-top w3-hide-large w3-hide-medium"
				id="myNavbar"
			>
				<div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
					<a
						href="#"
						className="w3-bar-item w3-button"
						style={{ width: "25% !important" }}
					>
						HOME
					</a>
					<a
						href="#about"
						className="w3-bar-item w3-button"
						style={{ width: "25% !important" }}
					>
						ABOUT
					</a>
					<a
						href="#photos"
						className="w3-bar-item w3-button"
						style={{ width: "25% !important" }}
					>
						PHOTOS
					</a>
					<a
						href="#contact"
						className="w3-bar-item w3-button"
						style={{ width: "25% !important" }}
					>
						CONTACT
					</a>
				</div>
			</div>

			<div className="w3-padding-large" id="main">
				<header
					className="w3-container w3-padding-32 w3-center w3-black"
					id="home"
				>
					<h1 className="w3-jumbo">
						<span className="w3-hide-small">I&apos;m</span>{" "}
						Ahmad Hassan Khan.
					</h1>
					<p>Full Stack Web Developer</p>
					<img
						src="/images/profile.jpg"
						alt="boy"
						className="w3-image"
						style={{ width: "40%", borderRadius: "100%" }}
					/>
				</header>
				<div
					className="w3-content w3-justify w3-text-grey w3-padding-64"
					id="about"
				>
					<h2 className="w3-text-light-grey">
						Ahmad Hassan Khan
					</h2>
					<hr
						style={{ width: "200px" }}
						className="w3-opacity"
					/>
					<p>
						Hi, I am Ahmad Hassan Khan, a full stack web
						designer and developer. I have worked in an IT
						company so I am have professional experience of
						web development. I have experience of more than
						two years. I have done full stack development
						using core PHP and it&apos;s frameworks as
						Wordpress and Codeigniter. Also I have great
						experience with MERN technology and NEXT js
						Applications. If you are looking for
						professional collaboration in web applications
						Contact me.
					</p>
					<h3 className="w3-padding-16 w3-text-light-grey">
						My Expertise
					</h3>
					<p className="w3-wide">HTML</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<p className="w3-wide">CSS & BOOTSTRAP</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<p className="w3-wide">
						NODE & EXPRESS & MONGODB
					</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<p className="w3-wide">PHP & CODEIGNITER</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<p className="w3-wide">
						JAVASCRIPT & REACT & NEXT JS
					</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<p className="w3-wide">FIREBASE</p>
					<div className="w3-white">
						<div
							className="w3-dark-grey"
							style={{ height: "28px", width: "90%" }}
						></div>
					</div>
					<br />
					<h3 className="w3-padding-24 w3-text-light-grey">
						My Reputation
					</h3>
					<img
						src="/images/cf.jpg"
						alt="Avatar"
						className="w3-left w3-circle w3-margin-right"
						style={{ width: "80px" }}
					/>
					<p>
						<span className="w3-large w3-margin-right">
							Kailavadiya
						</span>{" "}
						Top Buyer at Fiverr.
					</p>
					<p>Great Experience. Very Cooperative</p>
					<br />

					<img
						src="/images/cf.jpg"
						alt="Avatar"
						className="w3-left w3-circle w3-margin-right"
						style={{ width: "80px" }}
					/>
					<p>
						<span className="w3-large w3-margin-right">
							Radical Movement
						</span>{" "}
						Top Buyer at Fiverr.
					</p>
					<p>Professional and worked on each detail.</p>
				</div>
				<div
					className="w3-padding-50 w3-content"
					id="photos"
				>
					<Carousel
						swipeable={true}
						draggable={true}
						responsive={responsive}
						infinite={false}
						customTransition="all .5"
						transitionDuration={500}
						containerClass="carousel-container"
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
					>
						<Cards
							title={"Measy Sports"}
							image={"/images/measy-demo_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fmeasy-demo.mp4?alt=media&token=eb3109f9-0957-495e-9447-57500fbeb91a"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Background Generator"}
							image={
								"/images/background-gen-demo_Moment.jpg"
							}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fbackground-gen-demo.mp4?alt=media&token=24d154f5-6d7b-4c54-b293-364ad4778a32"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Dashboard"}
							image={"/images/dashboard-demo_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fdashboard-demo.mp4?alt=media&token=5915bd5e-6704-4e4f-8ad4-cd5a51abdd73"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Day Planner"}
							image={"/images/day-planner-demo_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fday-planner-demo.mp4?alt=media&token=bfb9eed2-88b2-49f8-b395-6edc0e2e3bb6"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Password Generator"}
							image={"/images/password-gen-demo_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fpassword-gen-demo.mp4?alt=media&token=35ca0c65-7c49-4638-8048-7513cfc7110f"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Team Planner"}
							image={"/images/team-share_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Fteam-share.mp4?alt=media&token=1c7a6b0c-c0af-48bf-ab36-bceddb9ccc4f"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Expand Url"}
							image={"/images/url-expand_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2Furl-expand.mp4?alt=media&token=87316e95-94cb-4560-a0d8-a470f8a9e199"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Calculator"}
							image={
								"/images/mobile-calculator-demo_Moment.jpg"
							}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/MobileDemos%2Fmobile-calculator-demo.mp4?alt=media&token=40cdc583-b8c7-46e3-a13b-ac1bb416de0d"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Web Links"}
							image={
								"/images/mobile-linkos-demo_Moment.jpg"
							}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/MobileDemos%2Fmobile-linkos-demo.mp4?alt=media&token=ad767dc0-865c-4206-8494-78369d2fd0ff"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"Stopwatch"}
							image={
								"/images/mobile-stopwatch-demo_Moment.jpg"
							}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/MobileDemos%2Fmobile-stopwatch-demo.mp4?alt=media&token=b53ed612-e1d3-447e-986d-f22478cf8266"
							}
							setVideoUrl={setVideoUrl}
						/>
						<Cards
							title={"JS Function"}
							image={"/images/Js-func-demo_Moment.jpg"}
							url={
								"https://firebasestorage.googleapis.com/v0/b/react-native-firebase-c436a.appspot.com/o/WebDemos%2FJs-func-demo.mp4?alt=media&token=aaedc063-47c2-4786-9f2a-5e0e944b979d"
							}
							setVideoUrl={setVideoUrl}
						/>
					</Carousel>
				</div>
				{videoUrl != "" && (
					<div
						className="w3-padding-50 w3-content"
						id="video"
					>
						<video
							src={videoUrl}
							width="100%"
							height={"400px"}
							controls
						/>
					</div>
				)}
				<div
					className="w3-padding-50 w3-content"
					id="projects"
				>
					<h2 className="w3-text-light-grey">
						Projects on Github
					</h2>
					<hr
						style={{ width: "200px" }}
						className="w3-opacity"
					/>

					<div
						className="w3-row-padding"
						style={{ margin: "0 -16px" }}
					>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/stripe_paypal"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/stripe_paypal
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/sports_management_site"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/sports_management_site
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/time_schedule_app"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/time_schedule_app
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/password_generator"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/password_generator
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/next_client_server"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/next_client_server
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/codeigniter_dashboard"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/codeigniter_dashboard
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/deploy_digital_ocean"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/deploy_digital_ocean
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/first_react_site"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/first_react_site
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/kaijas"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/kaijas
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/qasim-dashboard-client"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/qasim-dashboard-client
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/hostel_app"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/hostel_app
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/my_shopify"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/my_shopify
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/insta_downloder"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/insta_downloder
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/wordpress_plugin"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/wordpress_plugin
							</a>
						</div>
						<div className="my-4">
							<a
								href="https://github.com/Ahmadlohani/Background_Generator"
								target={"_blank"}
								rel="noreferrer"
								className="w3-white w3-padding-large w3-hover-black"
							>
								https://github.com/Ahmadlohani/Background_Generator
							</a>
						</div>
					</div>
				</div>
				<div
					className="w3-padding-64 w3-content w3-text-grey"
					id="contact"
				>
					<h2 className="w3-text-light-grey">Contact Me</h2>
					<hr
						style={{ width: "200px" }}
						className="w3-opacity"
					/>

					<div className="w3-section">
						<p>
							<i className="fa fa-user fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
							Ahmad Hassan Khan
						</p>
						<p>
							<i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i>{" "}
							Lahore, Pakistan
						</p>
						<p>
							<i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
								{" "}
							</i>{" "}
							Email: ah203076@gmail.com
						</p>
					</div>
					<br />
					<p>Let&apos;s get in touch. Send me a message:</p>

					<form action="/action_page.php" target="_blank">
						<p>
							<input
								className="w3-input w3-padding-16"
								type="text"
								placeholder="Name"
								disabled
								name="Name"
							/>
						</p>
						<p>
							<input
								className="w3-input w3-padding-16"
								type="text"
								placeholder="Email"
								disabled
								name="Email"
							/>
						</p>
						<p>
							<input
								className="w3-input w3-padding-16"
								type="text"
								placeholder="Subject"
								disabled
								name="Subject"
							/>
						</p>
						<p>
							<input
								className="w3-input w3-padding-16"
								type="text"
								placeholder="Message"
								disabled
								name="Message"
							/>
						</p>
						<p>
							<button
								className="w3-button w3-light-grey w3-padding-large"
								type="submit"
								disabled
							>
								<i className="fa fa-paper-plane"></i> SEND
								MESSAGE
							</button>
						</p>
					</form>
				</div>
				<footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
					<a
						href="https://www.facebook.com/profile.php?id=100022825365715"
						target={"_blank"}
						rel="noreferrer"
					>
						<i className="fa fa-facebook-official w3-hover-opacity p-2"></i>
					</a>
					<i className="fa fa-instagram w3-hover-opacity p-2"></i>
					<i className="fa fa-snapchat w3-hover-opacity p-2"></i>
					<i className="fa fa-pinterest-p w3-hover-opacity p-2"></i>
					<i className="fa fa-twitter w3-hover-opacity p-2"></i>
					<a
						href="https://www.linkedin.com/in/ahmad-hassan-62a65a240/"
						target={"_blank"}
						rel="noreferrer"
					>
						<i className="fa fa-linkedin w3-hover-opacity p-2"></i>
					</a>
				</footer>
			</div>
		</div>
	);
};

export default Home;
