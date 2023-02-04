import { getServerSideSitemap } from "next-sitemap";
// collect all the post
export async function getServerSideProps(ctx) {
	const { params } = ctx;
	// allPosts =[]
	const allUsers = usernames.map((user) => {
		const xmlData = user.frontmatter;
		// moidyfye data
		return {
			username: xmlData.username,
			first_name: xmlData.user.first_name.fa,
			description: xmlData.description.fa,
			last_name: xmlData.last_name.fa,
		};
	});
	//  fetch all the post and pass into getServerSideSitemap. but make sure your allPasts in array.
	return await getServerSideSitemap(ctx, allUsers);
}
