import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const socialNetworkLinks = [
    { text: "Discord", url: "https://gatsby.dev/discord" },
    { text: "Docs", url: "https://gatsbyjs.com/docs/" },
    { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
  ];

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `1rem`,
            backgroundColor: `rgba(200,200,200, 0.8)`,
            textAlign: `center`,
            padding: `10px 0`,
          }}
        >
          <span>
            <b>©</b> {new Date().getFullYear()} &#8226; Made by Radosav Panic
          </span>
          <br />
          {socialNetworkLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <a href={link.url} target="_blank">
                {link.text}
              </a>
              {i !== socialNetworkLinks.length - 1 && <> ◆ </>}
            </React.Fragment>
          ))}
        </footer>
      </div>
    </>
  );
};

export default Layout;
