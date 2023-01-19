import React from "react";
import styled from "styled-components";
import { Spinner } from "components";

const Button = ({
	onClick,
	children,
	type,
	style,
	className,
	buttonType,
	isLoading,
	disabled,
	...props
}) => {
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
		border-radius: 0.375rem;
		height: 40px;
		opacity: ${(props) => (props.disabled ? "0.8" : "1")};
	`;

	return (
		<Button
			onClick={onClick ? onClick : null}
			type={type}
			style={style}
			disabled={disabled}
			className={className}
			buttonType={buttonType}
			{...props}
		>
			{isLoading ? (
				<div className='btn-loader-wrapper'>
					<div className='btn-loader'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			) : (
				children
			)}
		</Button>
	);
};

export default Button;
