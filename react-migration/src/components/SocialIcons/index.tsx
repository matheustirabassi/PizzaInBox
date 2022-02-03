import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class SocialIcons extends Component {
	render() {
		return (
			<div className="social-icons">
				<a href="#!" aria-label="twitter">
					<FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
				</a>
				<a href="#!" aria-label="twitter">
					<FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon>
				</a>
				<a href="#!" aria-label="instagram">
					<FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon>
				</a>
			</div>
		);
	}
}

export default SocialIcons;