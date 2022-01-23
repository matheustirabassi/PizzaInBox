import { Component } from "react";

class SocialIcons extends Component {
	render() {
		return (
			<div className="social-icons">
				<a href="#!" aria-label="twitter">
					<i className="fab fa-twitter fa-2x"></i>
				</a>
				<a href="#!" aria-label="twitter">
					<i className="fab fa-facebook fa-2x"></i>
				</a>
				<a href="#!" aria-label="twitter">
					<i className="fab fa-instagram fa-2x"></i>
				</a>
			</div>
		);
	}
}

export default SocialIcons;