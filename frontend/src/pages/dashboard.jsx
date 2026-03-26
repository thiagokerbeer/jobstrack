import { useEffect, useMemo, useState } from "react";

const emptyForm = {
  company: "",
  role: "",
  status: "Salva",
  location: "",
  salary: "",
  date: "",
  link: "",
  notes: "",
};

function Dashboard({ onBack }) {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos os status");
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3001/jobs");
      const data = await response.json();

      setJobs(data);
    } catch (error) {
      console.error("Erro ao buscar candidaturas:", error);
      alert("Erro ao carregar candidaturas da API.");
    } finally {
      setLoading(false);
    }
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.role.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "Todos os status" || job.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [jobs, search, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: jobs.length,
      interviews: jobs.filter((job) => job.status === "Entrevista").length,
      tests: jobs.filter((job) => job.status === "Teste técnico").length,
      proposals: jobs.filter((job) => job.status === "Proposta").length,
    };
  }, [jobs]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.company.trim() ||
      !formData.role.trim() ||
      !formData.location.trim() ||
      !formData.salary.trim()
    ) {
      alert("Preencha empresa, vaga, local e salário.");
      return;
    }

    const payload = {
      company: formData.company,
      role: formData.role,
      status: formData.status,
      location: formData.location,
      salary: formData.salary,
      date: formData.date ? formatDate(formData.date) : "Sem data",
      link: formData.link,
      notes: formData.notes,
    };

    try {
      if (editingId) {
        const response = await fetch(`http://localhost:3001/jobs/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          alert(errorData.error || "Erro ao atualizar candidatura.");
          return;
        }

        const updatedJob = await response.json();

        setJobs((prev) =>
          prev.map((job) => (job.id === editingId ? updatedJob : job))
        );

        setEditingId(null);
        setFormData(emptyForm);
        return;
      }

      const response = await fetch("http://localhost:3001/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao cadastrar candidatura.");
        return;
      }

      const createdJob = await response.json();

      setJobs((prev) => [createdJob, ...prev]);
      setFormData(emptyForm);
    } catch (error) {
      console.error("Erro ao salvar candidatura:", error);
      alert("Erro ao salvar candidatura na API.");
    }
  }

  function handleEdit(job) {
    setEditingId(job.id);
    setFormData({
      company: job.company || "",
      role: job.role || "",
      status: job.status || "Salva",
      location: job.location || "",
      salary: job.salary || "",
      date: job.date && job.date !== "Sem data" ? toInputDate(job.date) : "",
      link: job.link || "",
      notes: job.notes || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleCancelEdit() {
    setEditingId(null);
    setFormData(emptyForm);
  }

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:3001/jobs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Erro ao excluir candidatura.");
        return;
      }

      setJobs((prev) => prev.filter((job) => job.id !== id));

      if (editingId === id) {
        handleCancelEdit();
      }
    } catch (error) {
      console.error("Erro ao excluir candidatura:", error);
      alert("Erro ao excluir candidatura na API.");
    }
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="container dashboard-header-content">
          <div>
            <p className="dashboard-kicker">Painel interno</p>
            <h1>Dashboard de Candidaturas</h1>
            <span>Acompanhe sua jornada até a primeira vaga</span>
          </div>

          <button className="btn btn-outline" onClick={onBack}>
            Voltar para Home
          </button>
        </div>
      </header>

      <main className="container dashboard-main">
        <section className="dashboard-stats">
          <div className="dashboard-stat-card">
            <h3>{stats.total}</h3>
            <p>Total de vagas</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>{stats.interviews}</h3>
            <p>Entrevistas</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>{stats.tests}</h3>
            <p>Testes técnicos</p>
          </div>

          <div className="dashboard-stat-card">
            <h3>{stats.proposals}</h3>
            <p>Propostas</p>
          </div>
        </section>

        <section className="dashboard-content-grid">
          <section className="dashboard-form-wrapper">
            <div className="dashboard-table-wrapper">
              <div className="dashboard-table-header">
                <h2>{editingId ? "Editar candidatura" : "Nova candidatura"}</h2>
                <p>
                  {editingId
                    ? "Atualize os dados da vaga selecionada."
                    : "Cadastre uma vaga e acompanhe o processo por aqui."}
                </p>
              </div>

              <form className="dashboard-form" onSubmit={handleSubmit}>
                <div className="dashboard-form-row">
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Vaga"
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                <div className="dashboard-form-row">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Salva</option>
                    <option>Candidatura enviada</option>
                    <option>Entrevista</option>
                    <option>Teste técnico</option>
                    <option>Proposta</option>
                    <option>Recusada</option>
                  </select>

                  <input
                    type="text"
                    name="location"
                    placeholder="Local"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="dashboard-form-row">
                  <input
                    type="text"
                    name="salary"
                    placeholder="Salário"
                    value={formData.salary}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="dashboard-form-row">
                  <input
                    type="text"
                    name="link"
                    placeholder="Link da vaga"
                    value={formData.link}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="notes"
                  placeholder="Observações"
                  rows="4"
                  value={formData.notes}
                  onChange={handleChange}
                />

                <div className="dashboard-form-actions">
                  <button type="submit" className="btn btn-primary">
                    {editingId ? "Atualizar candidatura" : "Salvar candidatura"}
                  </button>

                  {editingId ? (
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={handleCancelEdit}
                    >
                      Cancelar edição
                    </button>
                  ) : null}
                </div>
              </form>
            </div>
          </section>

          <section className="dashboard-list-wrapper">
            <section className="dashboard-toolbar">
              <input
                type="text"
                placeholder="Buscar por empresa ou vaga"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <select
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
              >
                <option>Todos os status</option>
                <option>Salva</option>
                <option>Candidatura enviada</option>
                <option>Entrevista</option>
                <option>Teste técnico</option>
                <option>Proposta</option>
                <option>Recusada</option>
              </select>
            </section>

            <section className="dashboard-table-wrapper">
              <div className="dashboard-table-header">
                <h2>Candidaturas</h2>
                <p>
                  {loading
                    ? "Carregando candidaturas..."
                    : `${filteredJobs.length} resultado(s) encontrado(s) no painel.`}
                </p>
              </div>

              <div className="dashboard-job-list">
                {!loading && filteredJobs.length === 0 ? (
                  <div className="dashboard-empty-state">
                    <h3>Nenhuma candidatura encontrada</h3>
                    <p>Tente outro filtro ou cadastre uma nova vaga.</p>
                  </div>
                ) : (
                  filteredJobs.map((job) => (
                    <div className="dashboard-job-card" key={job.id}>
                      <div className="dashboard-job-main">
                        <h3>{job.role}</h3>
                        <p>{job.company}</p>
                        <span>
                          {job.location} • {job.salary} • {job.date}
                        </span>

                        {job.link ? (
                          <a
                            href={job.link}
                            target="_blank"
                            rel="noreferrer"
                            className="dashboard-link"
                          >
                            Abrir vaga
                          </a>
                        ) : null}

                        {job.notes ? (
                          <small className="dashboard-notes">{job.notes}</small>
                        ) : null}
                      </div>

                      <div className="dashboard-job-side">
                        <span
                          className={`status ${job.status
                            .toLowerCase()
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .replace(/\s+/g, "-")}`}
                        >
                          {job.status}
                        </span>

                        <div className="dashboard-actions">
                          <button
                            className="action-btn"
                            onClick={() => handleEdit(job)}
                          >
                            Editar
                          </button>
                          <button
                            className="action-btn danger"
                            onClick={() => handleDelete(job.id)}
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

function toInputDate(dateString) {
  const [day, month, year] = dateString.split("/");
  return `${year}-${month}-${day}`;
}

export default Dashboard;