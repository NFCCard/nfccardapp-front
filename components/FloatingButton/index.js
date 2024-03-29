import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
	border: 0;
	outline: 0;
	position: fixed;
	top: ${(props) => (props.position.top ? props.position.top : "unset")};
	left: ${(props) => (props.position.left ? props.position.left : "unset")};
	bottom: ${(props) => (props.position.bottom ? props.position.bottom : "unset")};
	right: ${(props) => (props.position.right ? props.position.right : "unset")};
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	color: #fff;
	width: 70px;
	height: 70px;
	border-radius: 100%;
	::after {
		background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	}
`;
const SpanButton = styled.span`
	border: 0;
	outline: 0;
	position: fixed;
	text-decoration: none;
	top: ${(props) => (props.position.top ? props.position.top : "unset")};
	left: ${(props) => (props.position.left ? props.position.left : "unset")};
	bottom: ${(props) => (props.position.bottom ? props.position.bottom : "unset")};
	right: ${(props) => (props.position.right ? props.position.right : "unset")};
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	color: #fff;
	width: 70px;
	height: 70px;
	line-height: 4;
	border-radius: 100%;

	::after {
		background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : "#14a76c")};
	}
	:hover {
		color: #fff;
	}
`;

const FloatingButton = ({
	onClick,
	type,
	children,
	position,
	backgroundColor,
	isSpan,
	link,
	isDisabled,
}) => {
	return (
		<>
			{isSpan && (
				<SpanButton
					type={type}
					onClick={onClick}
					position={position}
					className='floatingButton'
					backgroundColor={backgroundColor}
				>
					{children}
				</SpanButton>
			)}
			{link && (
				<Link href={link}>
					<a>
						<SpanButton
							position={position}
							className='floatingButton'
							backgroundColor={backgroundColor}
						>
							{children}
						</SpanButton>
					</a>
				</Link>
			)}
			{!isSpan && !link && (
				<Button
					type={type}
					onClick={onClick}
					position={position}
					className='floatingButton'
					disabled={isDisabled}
					backgroundColor={backgroundColor}
				>
					{children}
				</Button>
			)}
		</>
	);
};

export default FloatingButton;
