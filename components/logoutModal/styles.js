import styled from "styled-components";

export const LogoutModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const LogoutModalButtonsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
`;
export const YesButton = styled.button`
	transition: all 200ms linear;
	padding: 0.2rem 1rem;
	border-radius: 6px;
	outline: 0;
	color: #dc3545;
	background-color: #fff;
	border: 1px solid #dc3545;
	&:hover {
		background-color: #dc3545;
		color: #fff;
	}
`;
export const NoButton = styled.button`
	transition: all 200ms linear;
	padding: 0.2rem 1rem;
	border-radius: 6px;
	outline: 0;
	color: #0d6efd;
	background-color: #fff;
	border: 1px solid #0d6efd;
	&:hover {
		background-color: #0d6efd;
		color: #fff;
	}
`;
