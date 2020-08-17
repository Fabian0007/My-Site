import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Slide = () => {
  const data = useStaticQuery(graphql`
    query {
      lgImage: file(relativePath: { eq: "me-lg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mdImage: file(relativePath: { eq: "me-md.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      smImage: file(relativePath: { eq: "me-sm.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <picture>
          <source media="(min-width: 850px)" srcSet={data.lgImage.childImageSharp.fluid.srcSet} />
          <source media="(min-width: 650px)" srcSet={data.mdImage.childImageSharp.fluid.srcSet} />
          <source srcSet={data.smImage.childImageSharp.fluid.srcSet} />
          <img
            src={data.smImage.childImageSharp.fluid.src}
            alt="Fabian Andres Cano's Photo"
            loading="lazy"
          />
      </picture>
  );
}

export default Slide
