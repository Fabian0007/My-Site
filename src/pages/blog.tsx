import React from 'react';
import { kebabCase } from 'lodash';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Img from 'gatsby-image';

const BlogPage = ({ data }) => {
    const posts = data.posts.edges;
    const tags = data.tags.group;
    return (
      <Layout>
        <SEO
          title="Blog"
          keywords={[`Fabian Andres Cano`, `Fabian`, `Cano`, `Blog`]}
          description="Fabian Andres Cano Blog"
        />
        <div className="post-list">
          <div className="post-list__item">
            <ul style={{ listStyleType: 'none' }}>
            {tags.map(tag => (
                <li style={{ float: 'left', padding: 16 }} key={tag.fieldValue + `tag`}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue}</Link>
              </li>
            ))
            }
            </ul>
          </div>
          {posts.map(post => (
            <div key={post.node.id} className="post-list__item">
              <div className="post-list__thumbnail">
                <Link to={post.node.fields.slug}>
                  <Img
                    fixed={post.node.frontmatter.thumbnail.childImageSharp.fixed}
                  />
                </Link>
              </div>
              <div className="post-list__content">
                <h2>{post.node.frontmatter.title}</h2>
                {post.node.frontmatter.tags ? (
                <div className="tags-container">
                  <ul className="taglist" style={{ listStyleType: 'none' }}>
                    {post.node.frontmatter.tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
                <p>{post.node.frontmatter.date}</p>
                <div className="post-list__excerpt">{post.node.excerpt}</div>
                <Link to={post.node.fields.slug}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    );
  };

export default BlogPage;

// Get all markdown data, in descending order by date, and grab the id, excerpt, slug, date, and title
export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
            node {
                id
                excerpt(pruneLength: 250)
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    tags
                    thumbnail {
                        childImageSharp {
                            fixed(width: 200, height: 200) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
}
`;