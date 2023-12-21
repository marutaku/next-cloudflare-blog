import ArticleCard from "./_components/article-card";
import { getAllPosts } from "@/utils/confluence";
import { parse } from "date-fns";

export default async function Home() {
  const articleMetadata = await getAllPosts();

  return (
    <main className="py-12 container mx-auto">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4  mx-auto">
        {articleMetadata.map((article) => (
          <div className="px-2" key={article.slug}>
            <ArticleCard
              title={article.title}
              heroImage={article.heroImage.url}
              description={article.description}
              publishedDate={new Date(article.publishDate)}
              slug={article.slug}
              category={article.category}
              tags={article.tags}
              link={`/articles/${article.slug}`}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
