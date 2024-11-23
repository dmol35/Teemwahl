// game.js (zweite Seite)
let playersCount = parseInt(localStorage.getItem("playersCount"));
let teamsCount = parseInt(localStorage.getItem("teamsCount"));
let teamAssignments = [];
let assignedPlayers = 0;

document.getElementById("assignButton").addEventListener("click", assignTeam);

function assignTeam() {
    if (assignedPlayers >= playersCount) {
        // Alle Spieler haben ihr Team erhalten, weiter zur Ergebnis-Seite
        window.location.href = "result.html";
        return;
    }

    // Zufällige Teamzuweisung
    let teamNumber = Math.floor(Math.random() * teamsCount) + 1;
    
    // Popup anzeigen
    document.getElementById("popupText").textContent = `Dein Team: Team ${teamNumber}`;
    document.getElementById("teamPopup").style.display = "block";

    // Teamzuweisung speichern
    teamAssignments.push(`Spieler ${assignedPlayers + 1} ist in Team ${teamNumber}`);
    assignedPlayers++;

    // Schließe das Popup nach 2 Sekunden
    setTimeout(function () {
        document.getElementById("teamPopup").style.display = "none";
    }, 2000);
}
