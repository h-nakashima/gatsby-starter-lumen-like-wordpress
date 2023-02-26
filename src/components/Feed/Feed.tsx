import React from "react";

import { Link } from "gatsby";

import { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

type Props = {
  edges: Array<Edge>;
};

const Feed: React.FC<Props> = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map((edge) => (
      <div className={styles.item} key={edge.node.fields.slug}>
        <h2 className={styles.title}>
          <Link
            className={styles.link}
            to={edge.node.frontmatter?.slug || edge.node.fields.slug}
          >
            {edge.node.frontmatter.title}
          </Link>
        </h2>
        <div className={styles.meta}>
          <time
            className={styles.time}
            dateTime={
              new Date(edge.node.frontmatter.date).toISOString().split("T")[0]
            }
          >
            {new Date(edge.node.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              weekday: "short",
            })}
          </time>
          <span className={styles.divider} />
          <span className={styles.category}>
            <Link to={edge.node.fields.categorySlug} className={styles.link}>
              {edge.node.frontmatter.category}
            </Link>
          </span>
        </div>
        <p className={styles.description}>
          {edge.node.frontmatter.description}
        </p>
        <Link
          className={styles.more}
          to={edge.node.frontmatter?.slug || edge.node.fields.slug}
        >
          Read
        </Link>
      </div>
    ))}
  </div>
);

export default Feed;
