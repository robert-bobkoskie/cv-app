import React, { Component } from 'react'
import P1_CarMP4 from '../images/PHASE_1/20160629_100145.mp4';

class CarMPEG4 extends Component {
	render() {
		return (
			<div className="CarMPEG4">
				<video width="auto" height="450px" controls >
					<source src={P1_CarMP4} type="video/mp4"/>
				</video>
			</div>
		);
	}   
}
export default CarMPEG4
