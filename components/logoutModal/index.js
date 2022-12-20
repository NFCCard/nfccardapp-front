import React from "react";
import { LogoutModalButtonsWrapper, LogoutModalWrapper, NoButton, YesButton } from "./styles";

function LogoutModal({ onClose, onLogout }) {
	return (
		<LogoutModalWrapper>
			<h5>از حساب کاربری خارج میشوید؟</h5>
			<LogoutModalButtonsWrapper>
				<YesButton onClick={onLogout}>بله</YesButton>
				<NoButton onClick={onClose}>خیر</NoButton>
			</LogoutModalButtonsWrapper>
		</LogoutModalWrapper>
	);
}

export default LogoutModal;
