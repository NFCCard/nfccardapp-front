/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["api.nfccardapp.ir"],
	},
};

module.exports = nextConfig;
