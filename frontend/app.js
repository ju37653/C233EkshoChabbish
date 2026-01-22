let token = localStorage.getItem("token") || "";

const viewSignin = document.getElementById("viewSignin");
const viewSignup = document.getElementById("viewSignup");
const viewApp = document.getElementById("viewApp");
const siEmail = document.getElementById("siEmail");
const siPass = document.getElementById("siPass");
const suFirst = document.getElementById("suFirst");
const suLast = document.getElementById("suLast");
const suEmail = document.getElementById("suEmail");
const suPass = document.getElementById("suPass");
const btnSignin = document.getElementById("btnSignin");
const btnSignup = document.getElementById("btnSignup");
const btnGoSignup = document.getElementById("btnGoSignup");
const btnGoSignin = document.getElementById("btnGoSignin");
const todoActive = document.getElementById("todoActive");
const todoDone = document.getElementById("todoDone");
const outBox = document.getElementById("out");

function showSignin() {
  viewSignin.classList.remove("hidden");
  viewSignup.classList.add("hidden");
  viewApp.classList.add("hidden");
}

function showSignup() {
  viewSignin.classList.add("hidden");
  viewSignup.classList.remove("hidden");
  viewApp.classList.add("hidden");
}

function showApp() {
  viewSignin.classList.add("hidden");
  viewSignup.classList.add("hidden");
  viewApp.classList.remove("hidden");
}

function setToken(newToken) {
  token = newToken || "";
  localStorage.setItem("token", token);
}

async function api(path, options = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = "Bearer " + token;

  const res = await fetch(path, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) throw data;
  return data;
}

async function loadTodos() {
  const data = await api("/todos");

  todoActive.innerHTML = "";
  todoDone.innerHTML = "";

  data.todos.forEach(todo => {
    const card = document.createElement("div");
    card.className = "collapse bg-base-100 border border-base-300 mb-3";

    card.innerHTML = `
      <div class="collapse-title font-semibold">
        ${todo.title}
      </div>
      <div class="collapse-content text-sm">
        ${todo.description || ""}
      </div>
      <div class="flex justify-end gap-2 p-2">
        ${
          !todo.completed
            ? `<button class="btn-done">
                 <img src="./public/don.png" class="w-8">
               </button>`
            : ""
        }
        <button class="btn-delete">
          <img src="./public/cors.png" class="w-8">
        </button>
      </div>
    `;

    const doneBtn = card.querySelector(".btn-done");
    if (doneBtn) {
      doneBtn.onclick = async () => {
        await api(`/todos/${todo.id}`, {
          method: "PATCH",
          body: JSON.stringify({ completed: true })
        });
        loadTodos();
      };
    }

    card.querySelector(".btn-delete").onclick = async () => {
      await api(`/todos/${todo.id}`, { method: "DELETE" });
      loadTodos();
    };
  
    todo.completed ? todoDone.appendChild(card) : todoActive.appendChild(card);
  });
}

btnGoSignup.onclick = showSignup;
btnGoSignin.onclick = showSignin;

btnSignin.onclick = async () => {
  outBox.textContent = "";
  try {
    const res = await api("/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email: siEmail.value,
        password: siPass.value
      })
    });

    setToken(res.data.token);
    showApp();
    loadTodos();
  } catch (e) {
    outBox.textContent = e.message || "Login failed";
  }
};

btnSignup.onclick = async () => {
  outBox.textContent = "";
  try {
    await api("/auth/sign-up", {
      method: "POST",
      body: JSON.stringify({
        firstName: suFirst.value,
        lastName: suLast.value,
        email: suEmail.value,
        password: suPass.value
      })
    });
    showSignin();
  } catch (e) {
    outBox.textContent = e.message || "Signup failed";
  }
};

token ? (showApp(), loadTodos()) : showSignin();
