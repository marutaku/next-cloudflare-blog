import fs from "fs";
import { globSync } from "glob";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import parseMD from "parse-md";
import { parse } from "date-fns";
import path from "path";

export type ArticleMetadata = {
  title: string;
  description: string;
  publishedDate: Date;
  slug: string;
  category: string;
  tags: string[];
  heroImage: string;
};

export const getAllArticleMetadata = (
  baseDirPath: string
): ArticleMetadata[] => {
  const articleFilePaths = globSync(`${baseDirPath}/**/index.md`);
  return articleFilePaths.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { metadata } = parseMD(fileContents) as {
      metadata: ArticleMetadata & {
        publishedDate: string;
      };
      content: string;
    };
    return {
      ...metadata,
      publishedDate: parse(metadata.publishedDate, "yyyy-MM-dd", new Date()),
      heroImage: path.join(`/articles/${metadata.slug}/`, metadata.heroImage),
    };
  });
};

export const getMarkdown = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
};

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark().use(remarkHtml).process(markdownContent);
  return result.toString();
};
