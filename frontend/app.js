const API = "http://localhost:5000";

async function load() {
  const res = await fetch(`${API}/messages`);
  const data = await res.json();

  document.getElementById("list").innerHTML =
    data.map(m => `<li>${m.text}</li>`).join("");
}

async function send() {
  const text = document.getElementById("text").value;

  await fetch(`${API}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  document.getElementById("text").value = "";
  load();
}

load();
