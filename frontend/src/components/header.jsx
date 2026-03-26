function Header({ onOpenDashboard }) {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <div className="brand-badge">JT</div>
          <div>
            <h2>JobTrack</h2>
            <p>Track your next opportunity</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#benefits">Benefícios</a>
          <a href="#processo">Como funciona</a>
          <a href="#servicos">Recursos</a>
          <a href="#vagas">Vagas</a>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-outline" onClick={onOpenDashboard}>
            Entrar
          </button>
          <button className="btn btn-primary" onClick={onOpenDashboard}>
            Começar agora
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;