// result.js (dritte Seite)
document.getElementById("newGameButton").addEventListener("click", function () {
    localStorage.clear();  // Lösche die gespeicherten Daten für das neue Spiel
    window.location.href = "index.html";  // Zurück zur Startseite
});

// Zeige die Teamzuweisungen an
let teamAssignments = JSON.parse(localStorage.getItem("teamAssignments"));

if (teamAssignments) {
    const teamList = document.getElementById("teamList");
    teamAssignments.forEach(assignment => {
        let li = document.createElement("li");
        li.textContent = assignment;
        teamList.appendChild(li);
    });
}
