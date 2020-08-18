import React from 'react';
import { PageProps, graphql } from 'gatsby';
import SEO from '../components/seo';

import Layout from '../components/layout';

type DataProps = {
  markdownRemark: {
      frontmatter: {
        title: string,
        path: string,
        date: string,
        tags: [string]
      },
      html: string
    }
}

const PostTemplate: React.FC<PageProps<DataProps>> = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`, ...frontmatter.tags]}
        description="post made by Fabian Andres Cano"
      />
      <section className="post-template">
        <div>
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
      tags
    }
  }
}
`;