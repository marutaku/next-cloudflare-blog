import ArticleCard from "./_components/article-card";
import Header from "./_components/common/header";

function generateDummyArticles() {
  const dummyArticles = [
    {
      slug: "article-1",
      title: "Next.jsについて学ぶ",
      description: "Next.js 13で追加されたAppRouterについて学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-2",
      title: "React Hooksの使い方",
      description: "React Hooksを使って状態管理を行う方法を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-3",
      title: "TypeScriptの基礎",
      description: "TypeScriptの基本的な概念と使い方を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-4",
      title: "Reduxの導入",
      description: "Reduxを使って状態管理を行う方法を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-5",
      title: "GraphQLの基礎",
      description: "GraphQLの基本的な概念と使い方を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-6",
      title: "Docker入門",
      description: "Dockerの基本的な概念と使い方を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-7",
      title: "AWS Lambdaの使い方",
      description:
        "AWS Lambdaを使ってサーバーレスアプリケーションを作る方法を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
    {
      slug: "article-8",
      title: "CI/CDパイプラインの構築",
      description: "CI/CDパイプラインを構築して自動デプロイを行う方法を学ぶ",
      imagePath: "https://source.unsplash.com/random/300x150",
    },
  ];

  return dummyArticles;
}

export default function Home() {
  const dummyArticles = generateDummyArticles();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 container mx-auto">
        <h1 className="text-3xl font-bold mb-8">記事一覧</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {dummyArticles.map((article) => (
            <div className="px-2" key={article.slug}>
              <ArticleCard
                title={article.title}
                description={article.description}
                imagePath={article.imagePath}
                link={`/articles/${article.slug}`}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
