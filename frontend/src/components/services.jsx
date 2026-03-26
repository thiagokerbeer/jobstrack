import { services, jobs } from "../data/jobs";

function Services() {
  return (
    <>
      <section className="section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Our services</span>
            <h2>Recursos para transformar bagunça em direção</h2>
            <p>
              Estrutura visual limpa, foco em produtividade e cara de produto
              profissional.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-image" />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="vagas">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Recent jobs</span>
            <h2>Prévia do seu painel de candidaturas</h2>
            <p>
              Um exemplo da área que depois vamos ligar ao backend e ao banco.
            </p>
          </div>

          <div className="jobs-preview">
            {jobs.map((job) => (
              <div className="job-preview-card" key={job.id}>
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                  <span>{job.meta}</span>
                </div>

                <span
                  className={`status ${job.status
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, "-")}`}
                >
                  {job.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;