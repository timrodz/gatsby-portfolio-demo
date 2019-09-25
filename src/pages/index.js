import React from 'react';
import Layout from '../components/layout'
import ProjectPreview from '../components/project-preview';

// GraphQL
import { graphql, useStaticQuery } from 'gatsby';



export default () => {
	const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
              }
            }
          }
        }
      }
    } 
  `);

	const projects = data.allProjectsJson.edges;

	return (
		<Layout>
			{projects.map(({ node: project }) => {
				const slug = project.slug;
				const title = project.title;
				const description = project.description;
				const imageData = project.image.childImageSharp.fluid;
				return (
					<ProjectPreview
						title={title}
						description={description}
						imageData={imageData}
						slug={slug}
					/>
				);
			})}

		</Layout>
	)
};
