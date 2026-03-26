import { features } from "../data/jobs";

function Features() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our benefits</span>
          <h2>Por que usar o JobTrack na sua busca por vaga</h2>
          <p>
            Menos confusão, mais prioridade. Você sabe exatamente onde está e
            para onde precisa ir.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="info-card" key={feature.title}>
              <div className="icon-bubble">+</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;