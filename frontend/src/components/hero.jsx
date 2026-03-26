import { jobs } from "../data/jobs";

function Hero({ onOpenDashboard }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Recruiting made simple</span>
          <h1>Organize sua busca de emprego com mais clareza e velocidade</h1>
          <p>
            O JobTrack ajuda você a registrar candidaturas, acompanhar etapas e
            manter foco nas oportunidades certas sem virar refém de planilha
            bagunçada.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary btn-large" onClick={onOpenDashboard}>
              Cadastrar candidatura
            </button>
            <button className="btn btn-outline btn-large" onClick={onOpenDashboard}>
              Ver demonstração
            </button>
          </div>

          <div className="hero-mini-stats">
            <div>
              <strong>5x</strong>
              <span>mais organização</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>visão do processo</span>
            </div>
            <div>
              <strong>1 lugar</strong>
              <span>para toda a jornada</span>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-card main-panel">
            <div className="panel-top">
              <span className="panel-pill">Painel ativo</span>
              <span className="panel-link">Atualizado hoje</span>
            </div>

            <h3>Minhas candidaturas</h3>
            <p className="panel-subtitle">
              Uma visão simples do que está em andamento agora.
            </p>

            <div className="panel-stats">
              <div className="panel-stat">
                <strong>12</strong>
                <span>Total</span>
              </div>
              <div className="panel-stat">
                <strong>4</strong>
                <span>Entrevistas</span>
              </div>
              <div className="panel-stat">
                <strong>2</strong>
                <span>Testes</span>
              </div>
            </div>

            <div className="panel-list">
              {jobs.map((job) => (
                <div className="panel-job" key={job.id}>
                  <div>
                    <h4>{job.role}</h4>
                    <p>{job.company}</p>
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

          <div className="floating-card floating-card-top">
            <span>Entrevistas</span>
            <strong>4 em andamento</strong>
          </div>

          <div className="floating-card floating-card-bottom">
            <span>Última atualização</span>
            <strong>Teste técnico recebido</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;