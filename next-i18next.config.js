module.exports = {
	debug: process.env.NODE_ENV === "development",
	i18n: {
		defaultLocale: "fa",
		locales: ["fa", "en"],
		localeDetection: false,
	},
	reloadOnPrerender: process.env.NODE_ENV === "development",
};
