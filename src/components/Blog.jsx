import articlesData from "../services/Articles";

const Blog = () => {
  return (
    <section className="padding-x py-20 bg-light bg-opacity-50" id="blog">
      <div className="max-width">
        <div>
          <h1 className="text-primary text-3xl pb-10">Latest Articles</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {articlesData.map((article, index) => (
            <div key={index} className="">
              <img
                src={article.image}
                alt={article.title}
                className="object-contain rounded-t-lg "
              />
              <div className="bg-white p-5">
                <p className="text-sm text-secondary">{article.author}</p>
                <h2 className="text-primary text-xl py-3">{article.title}</h2>
                <p className="text-secondary">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
