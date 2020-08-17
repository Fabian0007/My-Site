import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
//@ts-ignore
import seoImage from '../images/me-lg.jpg';

type IProps = {
  description: string,
  lang?: string,
  meta?: [{
    name: string,
    content: string
  }],
  title: string,
  keywords?: string[]
}

const SEO: React.FC<IProps> = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const baseUrl = site.siteMetadata.baseUrl;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: `${baseUrl}${seoImage}`,
        },
        {
          name: 'twitter:image',
          content: `${baseUrl}${seoImage}`,
        },
      ]
      .concat(
        keywords && keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      ).concat(meta ?? [])}
    />
  )
}

export default SEO;
