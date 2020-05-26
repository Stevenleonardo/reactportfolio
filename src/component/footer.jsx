import React from "react";

//import codepen from "../img/codepen.png";
//import github from "../img/github.png";
//import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/Stevenleonardo"
								target="_blank"
								rel="noopener noreferrer">
							
							</a>
							<a
								href="https://www.linkedin.com"
								target="_blank"
								rel="noopener noreferrer">
							
							</a>
						</div>
					</div>
					<h5 className="pt-4">Steven Leonardo &copy; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
