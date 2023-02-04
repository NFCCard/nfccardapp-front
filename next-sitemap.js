/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://nfccardapp.ir",
	changefreq: "daily",
	priority: 0.7,
	sitemapSize: 5000,
	generateRobotsTxt: true,
	exclude: ["/404", "/500", "customcard"],
	alternateRefs: [
		{
			href: "https://nfccardapp.ir/fa",
			hreflang: "fa",
		},
		{
			href: "https://nfccardapp.ir/en",
			hreflang: "en",
		},
	],
	// Default transformation function
	transform: async (config, path) => {
		return {
			loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
			changefreq: config.changefreq,
			priority: config.priority,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
			alternateRefs: config.alternateRefs ?? [],
		};
	},
	additionalSitemaps: [
		`https://nfccardapp.ir/sitemap.xml`,
		`https://nfccardapp.ir/server-sitemap.xml`,
	],
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: ["/404", "/500", "customcard"],
			},
			{ userAgent: "*", allow: "/" },
		],
	},
};
