fetch("http://localhost:8080/api/health")
    .then(r => r.text())
    .then(t => console.log("Backend:", t))
    .catch(e => console.error(e));
const statusElement = document.getElementById("status");