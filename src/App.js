import React, { useRef} from 'react';

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
import P2_FINAL_CAR_BAD_BLENDGif from './images/PHASE_2/FINAL_CAR_BAD_BLEND.gif';

import P2_STREETwithDOORGif from './images/PHASE_2/STREET_with_DOOR.gif';
import P2_CAR_DISAPPEARGif from './images/PHASE_2/CAR_DISAPPEAR.gif';
import P2_LIGHTENING_FULL_SIZEGif from './images/PHASE_2/LIGHTENING_FULL_SIZE.gif';
import P2_DOOR_Gif from './images/PHASE_2/DOOR.gif';
import P2_DOOR_MARKEDGif from './images/PHASE_2/DOOR_MARKED.gif';
import P2_LIGHTENING_PLUS_DOORGif from './images/PHASE_2/LIGHTENING_PLUS_DOOR.gif';
import P2_CAR_STREET_X_TESTGif from './images/PHASE_2/CAR_STREET_X_TEST.gif';
import P2_CAR_LIGHTENING_X_TESTGif from './images/PHASE_2/CAR_LIGHTENING_X_TEST.gif';

import P2_CAR_BAD_BLEND_LIGHTENINGGif from './images/PHASE_2/CAR_BAD_BLEND_LIGHTENING.gif';
import FINAL_CAR_GOOD_BLEND from './images/PHASE_2/FINAL_CAR_GOOD_BLEND.gif';

/*	===============================================
	// Use npm to start application from working dir:
	$ pwd
	/c/Users/rbobkoskie/Documents/GIT/robert-bobkoskie/cv-app
	$ npm start
	
	// Use npm run deploy to push updates to github server:
	$ npm run deploy
	=============================================== */

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
			<img src={P2_CarFinalDevGif} className="img_Full" alt="Phase 2: Final Deliverable" />
			
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
					by detecting the moving car and using that as the "white" image (correlates with the "white" portion
					of the mask). My first video used a street scene as the "dark" image, and the generated mask(s) and
					"white" image(s) to create the novel video. To create the final gif, I used GIMP to resize and relocate
					the Cartoon gif. I blended the images using the same code.
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img src={P1_FinalGif} className="img_1" alt="Phase 1: Deliverable" />
				</div>
				
				<p className="text_1">
					Phase 1 Deliverable (above): gif of street scene blended with cartoon gif and moving car.
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img style = {{ paddingRight:10 }} src={P1_RawGif} className="img_2" alt="Phase 1: Video texture created from MP4" />
					<img style = {{ paddingRight:10 }} src={P1_CarIdentifiedGif} className="img_2" alt="Phase 1: Car Identified" />
					<img src={P1_CarMaskGif} className="img_2" alt="Phase 1: Mask of Car" />
				</div>
				
				<p className="text_1">
					Above from left: Video texture created from MP4, Object recognition (car) in video texture, Video tracking, create
					mask of car for image blending in video texture.
				</p>
				<br /><br />
				
				<p className="text_1">
					<div className="row">
						<img style = {{ paddingRight:10 }} src={P1_CarStreetSceneGif} className="img_4" alt="Phase 1: Car Identified" />
						<div style = {{ width:200, paddingRight:10 }} >
							Left: Gif of moving car blended with street scene. Right: Cartoon gif.
							These gif's were blended together to create the deliverable for Phase 1.
						</div>
						<img src={P1_Simpsons_60fpsGif} className="img_4" alt="Phase 1: Car Identified" />
					</div>
				</p>
				<br /><br />
				<br /><br />
				
				<h1>Phase 2</h1>
				<p className="text_1">
					For Phase 2, I wanted to expand on the work accomplished in Phase 1. My goal was to code the manual parts of Phase 1. Since I
					was saving time by automating the manual processes, I also wanted to create a more complex video for Phase 2.
					To create the final gifs, I used a code based approach to auto-size, auto-detect images in frames; generating masks
					and "white" images for blending. The output (a gif like the doorway + lightening) became the input for creating a
					novel gif. This approach was used recursively four times to create the final gif of the disappearing car.
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img style = {{ paddingRight:10 }} src={P2_STREETwithDOORGif} className="img_2" alt="Phase 2: Street scene with door" />
					<img style = {{ paddingRight:10 }} src={P2_CAR_DISAPPEARGif} className="img_2" alt="Phase 2: Car Disappear" />
					<img src={P2_CarFinalDevGif} className="img_Full" className="img_2" alt="Phase 2: Final Deliverable" />
				</div>
				
				<p className="text_1">
					Above from Left: Doorway + lightening blended with street scene, Car with good blending into street scene, Disappearing car.
					After some experimentation, these gifs would eventually comprise the final gif (above right and top of page).
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img style = {{ paddingRight:10 }} src={P2_LIGHTENING_FULL_SIZEGif} className="img_3" alt="Phase 2: lightening" />
					<img style = {{ paddingRight:10 }} src={P2_DOOR_Gif} className="img_3" alt="Phase 2: Door" />
					<img style = {{ paddingRight:10 }} src={P2_DOOR_MARKEDGif} className="img_3" alt="Phase 2: Door with mask" />
					<img style = {{ paddingRight:10 }} src={P2_LIGHTENING_PLUS_DOORGif} className="img_3" alt="Phase 2: Door with lightening" />
				</div>
				
				<p className="text_1">
					Above from Left: Lightening gif, Doorway gif, Open doorway detected, Open doorway blended with lightening.
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img style = {{ paddingRight:10 }} src={P2_CAR_STREET_X_TESTGif} className="img_4" alt="Phase 2: Car with street X test" />
					<img style = {{ paddingRight:10 }} src={P2_CAR_LIGHTENING_X_TESTGif} className="img_4" alt="Phase 2: Car with lightening X test" />
					<br /><br />
				</div>
				
				<p className="text_1">
					Above, the “X” experiments demonstrate image masking and blending. The gif on the left was marked with “X”s about both the
					car and buildings. You’ll need to observe the gifs closely, as the “x”s appear as a “flicker” in the gifs. The car in this
					image is associated with the “white” area of the mask (from Phase 1 development), everything else, including the buildings
					with the “dark” area. Thus, the buildings would get masked out of the output gif and replaced with the street scene from the
					gif with the doorway and lightening. The gif on the right is the output, a blend of gif on the left with the gif of the street
					scene + doorway + lightening (above left). As expected only the 'X's near the car appear in the final output.
				</p>
				<br /><br />
				
				<div className="centered_img">
					<img style = {{ paddingRight:10 }} src={P2_CAR_BAD_BLEND_LIGHTENINGGif} className="img_4" alt="Phase 2: Car with bad blending" />
					<img style = {{ paddingRight:10 }} src={FINAL_CAR_GOOD_BLEND} className="img_4" alt="Phase 2: Car with good blending" />
				</div>
				
				<p className="text_1">
					Above, Blending experiments: The gif on the left is blended with a "white" mask area that is the same shape as the car.
					The gif on the right is blended with a slightly smaller area, by seven pixels on both axis [h, w] for the "white" mask. This small
					reduction in the shape of the mask appears to have improved the blending at the edges of the car, while not
					masking out too much of the car. Notice that some of the front tire in the blended image is masked out with the smaller mask.
					Using a "white" mask that was much smaller (~15 pixels, [h, w]) would mask out too much of the car and, thus was not a consideration.
				</p>
				<br /><br />	
			</div>
		</div>
	);
}

export default App;
