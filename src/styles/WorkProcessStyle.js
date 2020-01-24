import styled from "styled-components"

const WorkProcessStyle = styled.div`
	#work-process {
		background: ${props => props.theme.gradient};
		color: #fff;
	}
	.work-process > .item {
		padding: 0;
		position: relative;
		text-align: center;
	}
	.work-process > .item:last-child > .item-content:after {
		display: none;
	}
	.work-process > .item > .item-content {
		height: 102px;
		margin-top: 102px;
		position: relative;
		width: 100%;
		z-index: 10;
	}
	.work-process > .item > .item-content.mt-0:after {
		top: 50%;
	}
	.work-process > .item > .item-content.mt-0 > .icon-arrow {
		left: auto;
		margin-right: -32px;
		right: 0;
	}
	.work-process > .item > .item-content:before,
	.work-process > .item > .item-content:after {
		content: "";
		position: absolute;
		z-index: 10;
	}
	.work-process > .item > .item-content:before {
		border-top: 1px solid #a1a1a1;
		height: 1px;
		left: 0;
		top: 50%;
		width: 100%;
	}
	.work-process > .item > .item-content:after {
		border-right: 1px dashed #a1a1a1;
		height: 100%;
		right: 0;
		top: -50%;
		width: 1px;
	}
	.work-process > .item > .item-content > .icon-block {
		display: block;
		height: 66px;
		left: 50%;
		line-height: 66px !important;
		margin-left: -43px;
		margin-top: -33px;
		position: absolute;
		text-align: center;
		top: 50%;
		width: 86px;
		z-index: 20;
		color: #3a3939;
		background: yellow;
	}
	.work-process > .item > .item-content > .icon-arrow {
		bottom: 0;
		left: 0;
		margin-bottom: -44px;
		margin-left: -32px;
		position: absolute;
		z-index: 20;
	}
	.work-process > .item > .item-content > .dot {
		border-radius: 25%;
		content: "";
		height: 8px;
		margin-top: -4px;
		position: absolute;
		top: 50%;
		width: 8px;
		z-index: 10;
		background: #fff;
	}
	.work-process > .item > .item-content > .dot.dot-start {
		left: 0;
	}
	.work-process > .item > .item-content > .dot.dot-end {
		right: 0;
	}
	@media (max-width: 767px) {
		.work-process > .item:last-child > .item-content.mt-0 > .dot.dot-end {
			left: auto;
			right: 0;
		}
		.work-process > .item:last-child > .item-content > .dot.dot-end {
			left: 0;
		}
		.work-process > .item > .item-content {
			margin: 0 auto;
			width: 200px;
		}
		.work-process > .item > .item-content.mt-0:after {
			left: auto;
			right: 0;
			top: 50%;
		}
		.work-process > .item > .item-content:after {
			height: calc(100% + 24px);
			left: 0;
			top: 50%;
		}
		.work-process > .item > .item-content > .icon-arrow.icon-Up-3 {
			-ms-transform: rotate(180deg);
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
	}
	@media (min-width: 768px) {
		.work-process > .item > .item-content.mt-0 > .icon-arrow {
			bottom: 0;
			margin-bottom: -32px;
			top: auto;
		}
		.work-process > .item > .item-content > .icon-arrow {
			left: auto;
			margin-right: -32px;
			margin-top: -32px;
			right: 0;
			top: 0;
		}
	}
	.icon {
		display: inline-block;
		font-size: 1.125rem !important;
		height: 60px;
		line-height: 60px !important;
		text-align: center;
		width: 60px;
	}
	.icon.icon-medium {
		font-size: 1.5rem !important;
		height: 64px;
		line-height: 64px !important;
		width: 64px;
	}
	.text-white {
		color: #fff !important;
	}
`

export default WorkProcessStyle
