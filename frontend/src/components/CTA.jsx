function CTA({ onOpenDashboard }) {
  return (
    <section className="cta-section">
      <div className="container cta-box">
        <div>
          <span className="eyebrow">Find your perfect fit today</span>
          <h2>Comece a organizar sua próxima vaga agora</h2>
          <p>
            Dê ao seu portfólio uma home com cara de produto real e depois
            conectamos tudo ao sistema interno.
          </p>
        </div>

        <div className="cta-actions">
          <button className="btn btn-primary" onClick={onOpenDashboard}>
            Começar agora
          </button>
          <button className="btn btn-outline" onClick={onOpenDashboard}>
            Ver painel
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;