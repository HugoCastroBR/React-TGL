import styled from "styled-components";

export const ButtonStyle = styled.button<{
	FontSize: number;
	LinkColor: string;
	AuthTemplate: boolean;
}>`
	color: #707070;
	display: flex;
	width: ${(props) => `${props.AuthTemplate && "350px"}`};
	height: 130px;
	justify-content: center;
	align-items: center;
	border: none;
	background-color: transparent;
	font: italic normal bold ${(props) => `${props.FontSize}`}px / 70px
		"Helvetica Neue Bold";
	cursor: pointer;
	@media screen and (max-width: 400px) {
		font-size: 16px;
	}
	& a,
	span {
		text-decoration: none;
		color: ${(props) => `${props.LinkColor}`};

		& p {
			margin: 0px;
			margin-right: 50px;
		}
	}
`;
