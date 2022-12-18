import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { languages } from "utils/Languages";
import { useRouter } from "next/router";

function LanguageChanger() {
	const router = useRouter();
	const onToggleLanguageClick = (newLocale) => {
		const { pathname, asPath, query } = router;
		router.push({ pathname, query }, asPath, { locale: newLocale });
	};
	const { locales, locale: activeLocale } = router;
	const changeTo = router.locale === "en" ? "fa" : "en";

	return (
		<div className='language-changer-dropdown'>
			<button
				className='btn dropdown-toggle language-changer-button'
				type='button'
				id='dropdownMenuButton1'
				data-bs-toggle='dropdown'
				aria-expanded='false'
			>
				<span
					className={`flag-icon flag-icon-${
						languages.find((lang) => lang.code === activeLocale).country_code
					}`}
				></span>
			</button>
			<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
				{languages.map((lang) => (
					<li key={lang.country_code}>
						<button
							className='dropdown-item'
							onClick={() => {
								onToggleLanguageClick(changeTo);
							}}
							disabled={lang.code === activeLocale}
						>
							<span className={`flag-icon flag-icon-${lang.country_code}`}></span>
							{lang.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default LanguageChanger;
