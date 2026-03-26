const express = require("express");
const cors = require("cors");
const prisma = require("./prismaClient");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do JobTrack rodando 🚀");
});

app.get("/jobs", async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.json(jobs);
  } catch (error) {
    console.error("Erro ao buscar jobs:", error);
    res.status(500).json({ error: "Erro ao buscar candidaturas." });
  }
});

app.post("/jobs", async (req, res) => {
  try {
    const { company, role, status, location, salary, date, link, notes } = req.body;

    if (!company || !role || !location || !salary) {
      return res.status(400).json({ error: "Preencha empresa, vaga, local e salário." });
    }

    const newJob = await prisma.job.create({
      data: {
        company,
        role,
        status: status || "Salva",
        location,
        salary,
        date: date || "Sem data",
        link: link || "",
        notes: notes || "",
      },
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Erro ao criar job:", error);
    res.status(500).json({ error: "Erro ao cadastrar candidatura." });
  }
});

app.put("/jobs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { company, role, status, location, salary, date, link, notes } = req.body;

    if (!company || !role || !location || !salary) {
      return res.status(400).json({ error: "Preencha empresa, vaga, local e salário." });
    }

    const existingJob = await prisma.job.findUnique({
      where: { id },
    });

    if (!existingJob) {
      return res.status(404).json({ error: "Candidatura não encontrada." });
    }

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        company,
        role,
        status,
        location,
        salary,
        date: date || "Sem data",
        link: link || "",
        notes: notes || "",
      },
    });

    res.json(updatedJob);
  } catch (error) {
    console.error("Erro ao atualizar job:", error);
    res.status(500).json({ error: "Erro ao atualizar candidatura." });
  }
});

app.delete("/jobs/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const existingJob = await prisma.job.findUnique({
      where: { id },
    });

    if (!existingJob) {
      return res.status(404).json({ error: "Candidatura não encontrada." });
    }

    await prisma.job.delete({
      where: { id },
    });

    res.json({ message: "Candidatura removida com sucesso." });
  } catch (error) {
    console.error("Erro ao excluir job:", error);
    res.status(500).json({ error: "Erro ao excluir candidatura." });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});