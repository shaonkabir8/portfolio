import React, { useEffect } from "react"
import * as $ from "jquery"
import SkillStyle from "../styles/SkillStyle"

const SkillBar = () => {
	useEffect(() => {
		$(window).scroll(function() {
			var hT = $("#skill-bar-wrapper").offset().top,
				hH = $("#skill-bar-wrapper").outerHeight(),
				wH = $(window).height(),
				wS = $(this).scrollTop()
			if (wS > hT + hH - 1.4 * wH) {
				$(document).ready(function() {
					$(".skillbar-container").each(function() {
						$(this)
							.find(".skills")
							.animate(
								{
									width: $(this).attr("data-percent"),
								},
								5000
							) // 5 seconds
					})
				})
			}
		})
	})

	return (
		<SkillStyle>
			<div id="skill-bar-wrapper">
				<div className="text-left">
					HTML<span>90%</span>
					<div className="skillbar-container clearfix" data-percent="90%">
						<div className="html skills" />
					</div>
					CSS<span>85%</span>
					<div className="skillbar-container clearfix" data-percent="85%">
						<div className="css skills" />
					</div>
					JavaScript<span>80%</span>
					<div className="skillbar-container clearfix" data-percent="80%">
						<div className="javaScript skills" />
					</div>
					React<span>70%</span>
					<div className="skillbar-container clearfix" data-percent="70%">
						<div className="react skills" />
					</div>
					GraphQL<span>40%</span>
					<div className="skillbar-container clearfix" data-percent="40%">
						<div className="graphql skills" />
					</div>
					AJAX and API<span>50%</span>
					<div className="skillbar-container clearfix" data-percent="50%">
						<div className="ajax skills" />
					</div>
					jQuery<span>85%</span>
					<div className="skillbar-container clearfix" data-percent="85%">
						<div className="jquery skills" />
					</div>
					Git<span>60%</span>
					<div className="skillbar-container clearfix" data-percent="60%">
						<div className="git skills" />
					</div>
					Sass<span>40%</span>
					<div className="skillbar-container clearfix" data-percent="40%">
						<div className="sass skills" />
					</div>
					PSD to HTML<span>90%</span>
					<div className="skillbar-container clearfix" data-percent="90%">
						<div className="psd skills" />
					</div>
					Bootstrap<span>90%</span>
					<div className="skillbar-container clearfix" data-percent="90%">
						<div className="bootstrap skills" />
					</div>
					Photoshop<span>40%</span>
					<div className="skillbar-container clearfix" data-percent="40%">
						<div className="photoShop skills" />
					</div>
				</div>
			</div>
		</SkillStyle>
	)
}

export default SkillBar
