import React from "react";
import homepage from "../img/homepage.png";
import fitplay from "../img/fitplay.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>The HUB</h2>
									</div>
									<div>
										<button
											id="hub-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var hubModal = document.getElementById(
													"hub"
												);
												modalBG.style.display = "block";
												hubModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>FitPlay</h2>
									</div>
									<div>
										<button
											id="fitplay-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var fitplayModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												fitplayModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>To Do List</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="gallery-card">
					<div id="hub" className="modal-card">
						<div className="visual">
							<img src={homepage} alt=""/>
						</div>
						<div className="modal-info">
							<h2>The Hub</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype planner web-application to
										provide a company or project team the ability
										to send out announcements/goals and to also plan
										out their schedule with the rest of the team able to visualize
									</li>
									<li>
										Designed with HTML5, CSS3, Bootstrap,
										Webpack, MongoDB, Date-FNS and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<a
									href="https://gentle-sea-35926.herokuapp.com/"
									target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBackground = document.getElementById(
											"gallery-card"
										);
										var hubModal = document.getElementById(
											"hub"
										);
										modalBackground.style.display = "none";
										hubModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="fitplay" className="modal-card">
						<div className="visual">
							<img src={fitplay} alt=""/>
						</div>
						<div className="modal-info">
							<h2>FitPlay</h2>
							<div className="modal-description">
								<ul>
									<li>
										Prototype website to promote health
										by providing information on the different types
										of exercises but also to have chosen a music playlist
										for specific workouts

									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Bulma and Javascript
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
							<h4>More in store</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var fitplayModal = document.getElementById(
											"fitplay"
										);
										modalBG.style.display = "none";
										fitplayModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt=""/>
						</div>
						<div className="modal-info">
							<h2>To-Do List</h2>
							<div className="modal-description">
								<ul>
									<li>
										A to-do list to keep track of goals.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="./todoList/index.html" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
