import gtech from './images/gtech.png';
import logo from './images/logo.svg';

import P1_FinalGif from './images/PHASE_1/car_simpsons.gif';
import P1_RawGif from './images/PHASE_1/car.gif';
import P1_CarIdentifiedGif from './images/PHASE_1/car_detected.gif';
import P1_CarMaskGif from './images/PHASE_1/car_mask.gif';

import CarMPEG4 from "./components/CarMPEG4"

import './App.css';

import React, { useRef} from 'react'
function MyComponent(props) {
	const vidRef = useRef(null);
	const handlePlayVideo = () => {
		vidRef.current.play();
	}
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={gtech} className="gtech" alt="gtech" />
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<h1 className="text_1">"What’s the point of going out? We’re just gonna wind up back here anyway."<sub className="text_2">Homer Simpson</sub></h1>
			<p className="text_1">
				My goal for the final project was to design and implement computer vision tasks to gain
				high-level understanding from digital media (images and videos). The tasks included: scene
				reconstruction, object detection, event detection, video tracking, object recognition.
				This was accomplished using Python’s OpenCV library and a compilation of fun videos.
				<br /><br />
				Given tight deadline for this project, I decomposed the deliverable into two phases, with
				the second including some stretch goals for more advanced video tracking and image Stitching
				and Blending to create a novel video.
			</p>
			<br /><br />
			<h1>Phase 1</h1>
			<p className="text_1">
				For Phase 1, I wanted to keep the scope succinct, to make certain that  I could deliver something.
				For this phase, the goal was to replace a boring office scene that I used to create a video texture
				for assignment 11 with something more scenic. I started with the idea to mask out the office scene
				by detecting the moving car and using that as the 'white' image (correlates with the 'white' portion
				of the mask). My first video used a street scene as the 'black' image, and the generated mask(s) and
				'white' image(s) to create the novel video. To create the final gif, I used GIMP to resize and relocate
				the Cartoon gif. I blended the images using the same code.
				<br /><br />
				<img src={P1_FinalGif} className="img_1" alt="Phase 1: Deliverable" />
				<br /><br />
				Phase 1 Deliverable (above): gif of street scene blended with cartoon gif and moving car.
				<br /><br />
				<img src={P1_RawGif} className="img_2" alt="Phase 1: Video texture created from MP4" />
				<img src={P1_CarIdentifiedGif} className="img_2" alt="Phase 1: Car Identified" />
				<img src={P1_CarMaskGif} className="img_2" alt="Phase 1: Mask of Car" />
				<br /><br />
				Above from left: Video texture created from MP4, Object recognition (car) in video texture, Video tracking, create mask of car for image blending in video texture.
				<br /><br />
				<CarMPEG4/>
				<br /><br />
				Above from left: MP4 video clip, Gif of moving car blended with street scene, Cartoon gif.
			</p>
		</div>
	);
}

export default App;
