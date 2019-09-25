// Export function to create pages programatically
exports.createPages = async ({ actions, graphql, reporter }) => {
	// Create graphql request
	const result = await graphql(`{
		allProjectsJson {
			edges {
				node {
					slug
				}
			}
		}
	}`);

	if (result.error) {
		reporter.panic('There was a problem loading projects');
		return;
	}

	const projects = result.data.allProjectsJson.edges;

	// Make an alias from node to slug
	projects.forEach(({ node: { slug } }) => {
		actions.createPage({
			path: `/${slug}/`,
			component: require.resolve('./src/templates/project.js'),
			context: { slug }
		});
	});
};