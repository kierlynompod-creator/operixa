const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Business Website Platform",
    description:
      "A modern responsive website designed to strengthen brand credibility, improve user experience, and support lead generation.",
  },
  {
    number: "02",
    category: "AI Solutions",
    title: "AI Workflow Automation",
    description:
      "A practical automation system created to reduce repetitive work and improve operational efficiency.",
  },
  {
    number: "03",
    category: "Digital Marketing",
    title: "Growth Campaign Strategy",
    description:
      "A digital campaign strategy focused on visibility, engagement, and converting more visitors into qualified leads.",
  },
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Selected Work
          </span>

          <h2 className="section-title">
            Solutions Designed to Create Real Business Impact
          </h2>

          <p className="section-description">
            A look at the kinds of digital solutions OPERIXA builds to
            improve performance, efficiency, visibility, and growth.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article
              className="portfolio-card"
              key={project.number}
            >
              <div className="portfolio-preview">
                <span className="portfolio-preview-number">
                  {project.number}
                </span>

                <span className="portfolio-preview-label">
                  {project.category}
                </span>
              </div>

              <div className="portfolio-content">
                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;