import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `rgba(200,200,200,0.8)`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `1.3rem`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>

    <Link
      to="/"
      style={{
        fontSize: `1.3rem`,
        textDecoration: `none`,
      }}
    >
      About
    </Link>
  </header>
);

export default Header;
