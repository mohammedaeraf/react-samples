import Article from "./Article"; // Import Article component

const articles = [
  {
    title: "React Basics",
    body: "React is a JavaScript library for building UIs.",
  },
  {
    title: "Understanding Props",
    body: "Props allow components to receive data from their parent.",
  },
  {
    title: "What is Bootstrap?",
    body: "Bootstrap is a CSS framework that helps in designing responsive websites.",
  },
  {
    title: "What is useState?",
    body: "It's used to manage state",
  },
];

const ArticleList = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Articles</h1>
      {articles.map((article, index) => (
        <Article key={index} title={article.title}>
          {article.body}
        </Article>
      ))}
    </div>
  );
};

export default ArticleList;
