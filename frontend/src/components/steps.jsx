import { steps } from "../data/jobs";

function Steps() {
  return (
    <section className="section section-soft" id="processo">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">1-2-3 Hire</span>
          <h2>Um processo simples para acompanhar sua evolução</h2>
          <p>
            Inspirado em fluxos claros de recrutamento: registrar, acompanhar e
            agir no momento certo.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;