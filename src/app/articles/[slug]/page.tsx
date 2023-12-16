import React from "react";
import {
  getAllArticleMetadata,
  getMarkdown,
  markdownToHtml,
} from "@/libs/articles";
import styles from "../../../../styles/articles.module.scss";

export const generateStaticParams = async () => {
  const articleMetadataList = getAllArticleMetadata("./contents/articles/");

  return articleMetadataList.map(({ slug }) => ({
    slug,
  }));
};

const BlogArticle = async ({ params }: { params: { slug: string } }) => {
  const html = await markdownToHtml(
    getMarkdown(`./contents/articles/${params.slug}/index.md`).content,
  );
  return (
    <>
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
};

export default BlogArticle;
