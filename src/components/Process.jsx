const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your goals, challenges, audience, priorities, and current workflow.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the scope, roadmap, timeline, technology, and success criteria.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the solution with a focus on usability, performance, scalability, and quality.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "We review functionality, responsiveness, performance, and user experience before launch.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy the solution carefully and make sure the transition to production is smooth.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We remain available for maintenance, updates, improvements, and future growth.",
  },
];

function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            Our Process
          </span>

          <h2 className="section-title">
            A Clear Path From Idea to Execution
          </h2>

          <p className="section-description">
            Our process keeps projects organized, transparent, and focused
            on delivering practical results.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article
              className="process-card"
              key={step.number}
            >
              <div className="process-top">
                <span className="process-number">
                  {step.number}
                </span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;