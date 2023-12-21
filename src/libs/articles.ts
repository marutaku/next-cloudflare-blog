import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export type ArticleMetadata = {
  title: string;
  description: string;
  publishedDate: Date;
  slug: string;
  category: string;
  tags: string[];
  heroImage: string;
};

export const getMarkdown = (filePath: string) => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  return matter(fileContents);
};

export const markdownToHtml = async (markdownContent: string) => {
  const result = await remark()
    .use(remarkHtml, { allowDangerousHtml: true })
    .process(markdownContent);
  return result.toString();
};
