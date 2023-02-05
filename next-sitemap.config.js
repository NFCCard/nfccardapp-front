/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://nfccardapp.ir",
	changefreq: "daily",
	priority: 0.7,
	generateRobotsTxt: true,
	exclude: ["/404", "/500", "/customcard"],
	additionalSitemaps: [
		`https://nfccardapp.ir/sitemap.xml`,
		`https://nfccardapp.ir/server-sitemap.xml`,
	],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: ["/404", "/500", "/customcard"],
			},
			{ userAgent: "*", allow: "/" },
		],
	},
};
