import React from "react"
import PropTypes from "prop-types"

export default class About extends React.Component {
    render() {
        return (
            <div
                id="about-container"
                className="content-containers container text-center mt-5">
                <h1 id="about" className={this.props.bounceLeft}>
                    About
				</h1>
                <div className="row mt-5">
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
                        }>
                        <img src={layers} alt="" />
                        <h4>Responsive</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
                        }>
                        <img src={pen} alt="" />
                        <h4>Design</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
                        }>
                        <img src={cogwheel} alt="" />
                        <h4>Performance</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
                        }>
                        <img src={browser} alt="" />
                        <h4>Agile</h4>
                    </div>
                </div>
            </div>
        );
    }
}
About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};