import React, { useRef} from 'react'

import gtech from './images/gtech.png';
import logo from './images/logo.svg';
import CarMPEG4 from "./components/CarMPEG4"
import './App.css';

import P1_FinalGif from './images/PHASE_1/car_simpsons.gif';
import P1_RawGif from './images/PHASE_1/car.gif';
import P1_CarIdentifiedGif from './images/PHASE_1/car_detected.gif';
import P1_CarMaskGif from './images/PHASE_1/car_mask.gif';

import P1_CarStreetSceneGif from './images/PHASE_1/car_street_scene.gif';
import P1_Simpsons_60fpsGif from './images/PHASE_1/Simpsons_60fps.gif';

import P2_CarFinalDevGif from './images/PHASE_2/FINAL_CAR_DISAPPEAR.gif';


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
			<br /><br />
			
			<p className="centered">
				My goal for the final project was to design and implement Computer Vision (CV) methods to gain
				high-level understanding from digital media (images and videos). The tasks included: scene
				reconstruction, object detection, event detection, video tracking, object recognition.
				This was accomplished using Python’s OpenCV library and a compilation of fun videos.
				<br /><br />
				Given tight deadline for this project, I decomposed the deliverable into two phases, with
				the second including some stretch goals for more advanced video tracking and image Stitching
				and Blending to create a novel video.
			</p>
			<br /><br />
				
			<h1>"What’s the point of going out? We’re just gonna wind up back here anyway."<sub className="text_2">Homer Simpson</sub></h1>
			<img src={P2_CarFinalDevGif} className="img_Full" alt="Phase 3: Final Deliverable" />
			
			<div>
				<p className="text_1">
					Final gif (above) with blending, template matching and auto mask sizing. The gif was created using a smaller 'white'
					mask area (car) to improve the blend at the edges of the car. Using a smaller area for the 'white' mask to improve
					blending was found through experimentation.
				</p>
			</div>
			<br /><br />
			
			<div>
				<CarMPEG4/>
				<p className="text_1">
					Raw MP4 video (above): This video was used as the basis for the application of computer vision methods to create an
					original gif (Final Deliverable). A colleague and I tied dine thread around a model car and puled it back and forth
					across a desk. . The final gif would  only require approximately seven seconds of video, or enough for a complete
					“round-trip” of the car across the desk. The final video would loop over this footage, treating the bland office
					background (including me) as a “green-screen”. The model car would be identified and tracked in each image of the
					video, the office scene masked out and replaced with a street scene with additional CV video splicing.
				</p>
			</div>
			<br /><br />
			
			<div>
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
					
					<img style = {{ paddingRight:10 }} src={P1_RawGif} className="img_2" alt="Phase 1: Video texture created from MP4" />
					<img style = {{ paddingRight:10 }} src={P1_CarIdentifiedGif} className="img_2" alt="Phase 1: Car Identified" />
					<img src={P1_CarMaskGif} className="img_2" alt="Phase 1: Mask of Car" />
					<br /><br />
					Above from left: Video texture created from MP4, Object recognition (car) in video texture, Video tracking, create
					mask of car for image blending in video texture.
					<br /><br />
					
					<div className="row">
						<img style = {{ paddingRight:10 }} src={P1_CarStreetSceneGif} className="img_2" alt="Phase 1: Car Identified" />
						<div style = {{ width:200, paddingRight:10 }} >Left: Gif of moving car blended with street scene. Right: Cartoon gif.</div>
						<img src={P1_Simpsons_60fpsGif} className="img_2" alt="Phase 1: Car Identified" />
					</div>
					<br /><br />
				</p>
				<br /><br />
				
				<h1>Phase 2</h1>
				<p className="text_1">
					For Phase 2, I wanted to expand on the work done in Phase 1. My goal was to code the manual parts of Phase 1. Since I
					was saving time by automating the manual processes, I also wanted to create a more complex video for Phase 2.
					<br /><br />
					To create the final gifs, I used a code based approach to auto-size, auto-detect images in frames; generating masks
					and 'white' images for blending. The output (a gif like the doorway + lightening) became the input for creating a
					novel gif. This approach was used recursively four times to create the final gif of the disappearing car.
					<br /><br />
				</p>
			</div>
		</div>
	);
}

export default App;
