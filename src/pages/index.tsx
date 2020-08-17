import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Slide from "../components/slide";
import SEO from "../components/seo";
import Button from '../components/button';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Fabian Andres Cano`, `Fabian`, `Cano`, `Blog`]}
      description="Fabian Andres Cano's personal blog"
    />
    <Slide />
  </Layout>
)

export default IndexPage;
