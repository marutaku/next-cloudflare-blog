import React from "react";
import {
  getAllArticleMetadata,
  getArticleMetadata,
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

const BlogArticle = async ({
  params,
}: {
  params: { slug: string; title: string };
}) => {
  const articlePath = `./contents/articles/${params.slug}/index.md`;
  const metadata = getArticleMetadata(articlePath);
  const html = await markdownToHtml(getMarkdown(articlePath).content);
  return (
    <div className="my-8">
      <h1 className="text-2xl text-center m-4">{metadata.title}</h1>
      <div
        className={styles.container}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default BlogArticle;
