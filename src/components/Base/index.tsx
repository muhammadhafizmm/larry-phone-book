import styled from "@emotion/styled";
import { HeaderProps } from "./types";

const Section = styled.div({
	display: "flex",
	alignItems: "center",
	padding: "40px 80px",
	justifyContent: "center",
	minHeight: "calc(100vh - 80px)",
	flexDirection: "column",
	gap: 30
});

const Header = styled.span<HeaderProps>(
	{
		color: "white",
		fontSize: "48px",
		textAlign: "center",
    fontWeight: 700
	},
	(props) => ({
		fontSize: props.fontSize,
		color: props.color,
	}),
);

export { Section, Header };
