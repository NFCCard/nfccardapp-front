import { getServerSideSitemap } from "next-sitemap";
import api from "api";

// collect all the users
export async function getServerSideProps(ctx) {
	let users = [];
	try {
		let usersData = await api.get.getUserList();
		users = usersData.data.map((item) => ({
			loc: `https://nfccardapp.ir/${item.username}`,
			title: item.profile.first_name.fa + " " + item.profile.last_name.fa,
		}));
	} catch (error) {
		console.log(error);
	}

	//  fetch all the post and pass into getServerSideSitemap. but make sure your allPasts in array.
	return await getServerSideSitemap(ctx, users);
}

export default function Sitemap() {}
