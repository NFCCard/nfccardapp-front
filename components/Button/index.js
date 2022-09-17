import React from "react";
import styled from "styled-components";

const Button = ({ onClick, children, type, style, className, buttonType, ...props }) => {
	const Button = styled.button`
		border: 0;
		outline: 0;
		background-color: ${(props) =>
			props.buttonType === "success"
				? "#14a76c"
				: props.buttonType === "danger"
				? "crimson"
				: "#ff652f"};
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 12px;
	`;

	return (
		<Button
			onClick={onClick}
			type={type}
			style={style}
			className={className}
			buttonType={buttonType}
			{...props}
		>
			{children}
		</Button>
	);
};

export default Button;
