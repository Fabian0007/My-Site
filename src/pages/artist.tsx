import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const ArtistPage = ({ data }) => (
  <Layout>
    <SEO
      title="Me as an Artist"
      keywords={[`Fabian Andres Cano`, `Fabian`, `Cano`, `Artist`]}
      description="Fabian Andres Cano as an Artist"
    />
    <div className="project-list">
      <h1>Artistic Works</h1>
      {data.allArtisticWorksJson.edges.map(artisticWork => (
        <div key={artisticWork.node.id} className="project-list__item">
          <div className="project-list__thumbnail">
            <Img fluid={artisticWork.node.thumbnailImage.childImageSharp.fluid} />
          </div>
          <div className="project-list__content">
            <h2>{artisticWork.node.title}</h2>
            <div className="project-list__excerpt">
              {artisticWork.node.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default ArtistPage;

export const artisticWorksQuery = graphql`
  query {
    allArtisticWorksJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;