// =====================
// EXCHANGE RATES
// =====================
let rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  RWF: 1300,
  KES: 130,
  UGX: 3800,
  TZS: 2500,
  NGN: 1500,
  ZAR: 18,
  JPY: 150
};

// =====================
// CONVERT FUNCTION
// =====================
function convert() {
  let amount = parseFloat(document.getElementById("amount").value);
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  // validation
  if (isNaN(amount) || amount <= 0) {
    alert(window.translateText ? window.translateText("alert_valid_amount") : "Enter a valid amount");
    return;
  }

  // conversion formula
  let result = (amount / rates[from]) * rates[to];

  // display result
  document.getElementById("result").innerText =
    `${amount} ${from} = ${result.toFixed(2)} ${to}`;

  // exchange rate
  let rate = rates[to] / rates[from];
  document.getElementById("rate").innerText =
    `1 ${from} = ${rate.toFixed(2)} ${to}`;

  // timestamp
  let now = new Date().toLocaleString();
  document.getElementById("time").innerText =
    (window.translateText ? window.translateText("time_updated") : "Updated: ") + now;

  // save to history
  saveHistory({
    amount: amount,
    from: from,
    to: to,
    result: result.toFixed(2),
    date: now
  });

  // reload history
  loadHistory();
}

// =====================
// SWAP FUNCTION
// =====================
function swap() {
  let from = document.getElementById("from");
  let to = document.getElementById("to");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;

  convert(); // auto convert after swap
}

// =====================
// SAVE HISTORY
// =====================
function saveHistory(data) {
  let history = JSON.parse(localStorage.getItem("history")) || [];

  history.push(data);

  // limit to last 10 records
  if (history.length > 10) {
    history.shift();
  }

  localStorage.setItem("history", JSON.stringify(history));
}

// =====================
// LOAD HISTORY
// =====================
function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let container = document.getElementById("historyList");

  if (!container) return;

  container.innerHTML = "";

  history.slice().reverse().forEach(item => {
    container.innerHTML += `
      <div class="history-item">
        <strong>${item.amount} ${item.from} → ${item.to}</strong><br>
        ${item.result}<br>
        <small>${item.date}</small>
      </div>
      <hr>
    `;
  });
}

// =====================
// CLEAR HISTORY
// =====================
function clearHistory() {
  localStorage.removeItem("history");
  loadHistory();
}

// =====================
// THEME TOGGLE
// =====================
function toggleTheme() {
  document.body.classList.toggle("dark");

  let theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// =====================
// AUTO LOAD SETTINGS
// =====================
window.onload = function () {
  // load theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // load history
  loadHistory();
};

function updateComparisonTable() {
  let table = document.getElementById("compareTable");
  table.innerHTML = "";

  let max = 4000; // for scaling bars (based on UGX)

  Object.keys(baseRates).forEach(cur => {
    let demandFactor = getDemandFactor(cur);
    let rate = baseRates[cur] * demandFactor;

    let width = (rate / max) * 100;

    let color = rate > 1000 ? "green" : rate > 100 ? "orange" : "red";

    table.innerHTML += `
      <tr>
        <td>${cur}</td>
        <td>${rate.toFixed(2)}</td>
        <td>
          <div style="background:#ddd; width:100%; height:15px;">
            <div style="width:${width}%; height:15px; background:${color};"></div>
          </div>
        </td>
      </tr>
    `;
  });
}
function updateDetails() {
  let currency = document.getElementById("currencySelect").value;

  let demandFactor = getDemandFactor(currency);
  let rate = baseRates[currency] * demandFactor;

  document.getElementById("currencyTitle").innerText =
    currency + " DETAILS";

  document.getElementById("liveRate").innerText =
    "Live Rate: 1 USD = " + rate.toFixed(2) + " " + currency;

  document.getElementById("demand").innerText =
    "Demand factor: " + demandFactor.toFixed(2);

  document.getElementById("compare").innerText =
    "1 USD ≈ " + rate.toFixed(2) + " " + currency;

  document.getElementById("trend").innerText =
    (demandFactor > 1.1) ? "📈 Rising due to usage" : "📊 Stable market";

  drawChart(currency, rate);

  // 👉 ADD THIS LINE
  updateComparisonTable();
}
function drawChart(currency, rate) {
  let canvas = document.getElementById("chart");
  let ctx = canvas.getContext("2d");

  canvas.width = 600;
  canvas.height = 300;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 📊 simulate REAL rising/falling trend (not random chaos)
  let data = [];
  let current = rate;

  for (let i = 0; i < 12; i++) {
    // simulate growth trend (market behavior)
    let change = (Math.random() - 0.4) * (rate * 0.05);
    current = current + change;

    data.push(current);
  }

  // find min/max for scaling
  let min = Math.min(...data);
  let max = Math.max(...data);

  function scaleY(value) {
    return 250 - ((value - min) / (max - min)) * 200;
  }

  function scaleX(i) {
    return i * 50 + 20;
  }

  // draw line
  ctx.beginPath();
  ctx.moveTo(scaleX(0), scaleY(data[0]));

  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(scaleX(i), scaleY(data[i]));
  }

  // style line (green = rising market feel)
  ctx.strokeStyle = "green";
  ctx.lineWidth = 3;
  ctx.stroke();

  // draw points
  data.forEach((val, i) => {
    ctx.beginPath();
    ctx.arc(scaleX(i), scaleY(val), 4, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  });

  // label
  ctx.fillStyle = "black";
  ctx.fillText(currency + " Market Growth Trend", 20, 20);
}
