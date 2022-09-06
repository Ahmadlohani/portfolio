import React from "react";

const Cards = ({ title, image, url, setVideoUrl }) => {
	return (
		<div class="w3-card-3 w3-margin w3-center">
			<img
				src={image}
				alt="Dashboard"
				width={"300px"}
				height={"300px"}
			/>
			<div class="w3-container w3-center">
				<p>{title}</p>
			</div>
			<button
				className="w3-btn w3-block w3-teal"
				onClick={() => {
					setVideoUrl(url);
				}}
			>
				Watch
			</button>
		</div>
	);
};

export default Cards;
