const API = 'http://localhost:3000/api';

// Register
async function register(data) {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

// Login
async function login(username, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return res.json();
}

// Token save/get
function saveToken(token) { localStorage.setItem('token', token); }
function getToken() { return localStorage.getItem('token'); }
function logout() { localStorage.removeItem('token'); window.location.href = 'login.html'; }