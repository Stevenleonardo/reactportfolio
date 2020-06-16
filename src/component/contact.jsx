import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 " + this.props.fadeInLeft}>
					Contact
				</h1>
				<form
					className={this.props.shake}
					action="https://formspree.io/example@email.com"
					method="POST">
					<div>
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								
							</div>
						</div>
					</div>
					<div className="form-group hidden">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<h2>Stevenleonardo@Knights.ucf.edu</h2>
							</div>
						</div>
					</div>
					<div className="form-group hiddenRight">
						<div className="row">
							<div className="col-12 col-sm-12 col-md-6 mx-auto">
								<a href="https://www.linkedin.com/in/steven-leonardo-21a6041ab/">
									<h2>LinkedIn</h2>
								</a>
								<br/>
								<a href="https://github.com/Stevenleonardo/reactportfolio">
									<h2>GitHub</h2>
								</a>
							</div>
						</div>
					</div>
					<div className="row text-md-right text-sm-center">
						<div className="col-12 col-sm-12 col-md-6 mx-auto">
						</div>
					</div>
				</form>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
