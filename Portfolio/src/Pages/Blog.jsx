const Blog = () => {
  const blogs = [
    {
      category: "React.js",
      title: "Understanding React Components",
      description:
        "Learn how reusable React components help developers build scalable user interfaces.",
    },
    {
      category: "JavaScript",
      title: "Important JavaScript Concepts",
      description:
        "Explore important JavaScript concepts that every modern web developer should understand.",
    },
    {
      category: "MERN Stack",
      title: "How the MERN Stack Works",
      description:
        "Understand how MongoDB, Express.js, React.js and Node.js work together.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>MY ARTICLES</p>
          <h1>Blog</h1>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className="blog-card" key={blog.title}>
              <span className="blog-category">{blog.category}</span>

              <h2>{blog.title}</h2>

              <p>{blog.description}</p>

              <span className="read-more">Read Article →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
