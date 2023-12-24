import React from "react";
import Script from "next/script";
import { markdownToHtml } from "@/libs/articles";
import "github-markdown-css/github-markdown-light.css";
import StaticImage from "@/app/_components/common/image";
import {
  getAllPosts,
  getPostBySlug,
  getPostMetadataBySlug,
} from "@/utils/contentful";
import { Metadata, ResolvingMetadata } from "next";
import { BLOG_NAME } from "@/utils/constants";
import styles from "./articles.module.scss";

export const generateStaticParams = async () => {
  const articleMetadataList = await getAllPosts();
  return articleMetadataList.map(({ slug }) => ({
    slug,
  }));
};

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  const article = await getPostMetadataBySlug(slug);

  return {
    title: article.title,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/articles/${article.slug}`,
      siteName: BLOG_NAME,
      type: "website",
      images: [{ url: article.heroImage.url }],
    },
  };
}

const BlogArticle = async ({
  params,
}: {
  params: { slug: string; title: string };
}) => {
  const { body, heroImage, title } = await getPostBySlug(params.slug);
  const html = await markdownToHtml(body);
  return (
    <>
      <Script async src="//cdn.embedly.com/widgets/platform.js" />
      <div className="m-8  container mx-auto" style={{ maxWidth: 800 }}>
        <div className="max-w-full">
          <StaticImage src={heroImage.url} height={200} width="100%" />
        </div>
        <h1 className="text-2xl text-center m-4">{title}</h1>
        <div
          className={`markdown-body p-4 ${styles.markdownBodyOverride}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
};

export default BlogArticle;
