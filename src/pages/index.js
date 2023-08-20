import * as React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";

const BlogLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #7026b9;

  &:hover {
    text-decoration: underline;
  }
`;

const introLinks = [
  { text: "Milion.js", url: "https://million.dev/" },
  { text: "Java LTS Update", url: "https://jdk.java.net/21/release-notes" },
  { text: "Node.js 20", url: "https://www.sitepoint.com/node-js-20-new/" },
];

export default ({ data }) => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/it-news-header.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Tech news of Computer World on <b>IT Blog!</b>
      </h1>
      <p className={styles.intro}>
        <b>Popular news:</b>{" "}
        {introLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url} target="_blank">
              {link.text}
            </Link>
            {i !== introLinks.length - 1 && <> ◆ </>}
          </React.Fragment>
        ))}
        <br />
        Tons of exciting news and events in development!
      </p>
    </div>

    <ul className={styles.list}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id} className={styles.listItem}>
          <BlogLink to={node.fields.slug}>
            <span>{node.frontmatter.title}</span> ↗
          </BlogLink>
          <br />
          <span className={styles.listItemDate}>{node.frontmatter.date}</span>
          <p className={styles.listItemDescription}>{node.excerpt}</p>
        </li>
      ))}
    </ul>
  </Layout>
);

export const Head = () => <Seo title="Home" />;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
