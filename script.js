// Dados fictícios
const dados = [
  { mes: "Janeiro", vendas: 120, clientes: 30 },
  { mes: "Fevereiro", vendas: 150, clientes: 40 },
  { mes: "Março", vendas: 180, clientes: 50 },
  { mes: "Abril", vendas: 200, clientes: 60 },
];

// Atualiza cards
document.getElementById("total-vendas").textContent =
  dados.reduce((acc, item) => acc + item.vendas, 0);

document.getElementById("clientes").textContent =
  dados.reduce((acc, item) => acc + item.clientes, 0);

// Preenche tabela
const tabela = document.getElementById("dados-tabela");
dados.forEach(item => {
  const linha = `<tr><td>${item.mes}</td><td>${item.vendas}</td><td>${item.clientes}</td></tr>`;
  tabela.innerHTML += linha;
});

// Gráfico com Chart.js
const ctx = document.getElementById("grafico").getContext("2d");
new Chart(ctx, {
  type: "bar",
  data: {
    labels: dados.map(item => item.mes),
    datasets: [
      {
        label: "Vendas",
        data: dados.map(item => item.vendas),
        backgroundColor: "#4a90e2"
      },
      {
        label: "Clientes",
        data: dados.map(item => item.clientes),
        backgroundColor: "#50e3c2"
      }
    ]
  }
});