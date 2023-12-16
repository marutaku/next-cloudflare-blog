import { getAllArticleMetadata } from "@/libs/articles";
import ArticleCard from "./_components/article-card";

export default function Home() {
  const articleMetadata = getAllArticleMetadata("./contents/articles/");

  return (
    <main className="py-12 container mx-auto">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {articleMetadata.map((article) => (
          <div className="px-2" key={article.slug}>
            <ArticleCard {...article} link={`/articles/${article.slug}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
