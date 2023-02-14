import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { LogoutModalButtonsWrapper, LogoutModalWrapper, NoButton, YesButton } from "./styles";

function LogoutModal({ onClose, onLogout }) {
	const router = useRouter();
	const { t } = useTranslation("common");

	useEffect(() => {
		var dir = router.locale == "fa" ? "rtl" : "ltr";
		let lang = router.locale == "fa" ? "fa" : "en";
		document.querySelector("body").setAttribute("dir", dir);
		document.querySelector("body").setAttribute("lang", lang);
	}, [router.locale]);

	return (
		<LogoutModalWrapper>
			<h5>{t("profile_exit")}</h5>
			<LogoutModalButtonsWrapper>
				<YesButton onClick={onLogout}>{t("yes")}</YesButton>
				<NoButton onClick={onClose}>{t("no")}</NoButton>
			</LogoutModalButtonsWrapper>
		</LogoutModalWrapper>
	);
}

export default LogoutModal;
