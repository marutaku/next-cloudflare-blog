import { getAllArticleMetadata } from "@/libs/articles";
import ArticleCard from "./_components/article-card";

export default function Home() {
  const articleMetadata = getAllArticleMetadata("./contents/articles/").sort(
    (a, b) => Number(b.publishedDate) - Number(a.publishedDate),
  );

  return (
    <main className="py-12 container mx-auto">
      <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4  mx-auto">
        {articleMetadata.map((article) => (
          <div className="px-2" key={article.slug}>
            <ArticleCard {...article} link={`/articles/${article.slug}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
