import React from "react";
import Script from "next/script";
import { markdownToHtml } from "@/libs/articles";
import "github-markdown-css/github-markdown-light.css";
import StaticImage from "@/app/_components/common/image";
import { getAllPosts, getPostBySlug } from "@/utils/confluence";

export const generateStaticParams = async () => {
  const articleMetadataList = await getAllPosts();
  return articleMetadataList.map(({ slug }) => ({
    slug,
  }));
};

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
          className="markdown-body p-4"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ lineHeight: "1.9 !important" }}
        />
      </div>
    </>
  );
};

export default BlogArticle;
