let playersCount, teamsCount, teamAssignments = [];
let teamCapacity = []; // Wird verwendet, um die Anzahl der Spieler pro Team zu verfolgen
let availableTeams = [];

document.getElementById("assignButton").addEventListener("click", assignTeams);

function assignTeams() {
    // Eingabewerte holen
    playersCount = parseInt(document.getElementById("players").value);
    teamsCount = parseInt(document.getElementById("teams").value);

    if (isNaN(playersCount) || isNaN(teamsCount) || playersCount <= 0 || teamsCount <= 0) {
        alert("Bitte gib eine gültige Anzahl von Spielern und Teams ein.");
        return;
    }

    // Initialisiere die Teamkapazitäten und das Teamzuweisungs-Array
    teamAssignments = [];
    teamCapacity = Array(teamsCount).fill(0);  // Setzt die Teamkapazität auf 0 (keine Spieler zugewiesen)
    availableTeams = Array.from({ length: teamsCount }, (_, i) => i + 1);  // Teams von 1 bis n

    // Erstelle Buttons für jeden Spieler
    let playerButtonsContainer = document.getElementById("playerButtonsContainer");
    playerButtonsContainer.innerHTML = ''; // Leert den Container

    for (let i = 1; i <= playersCount; i++) {
        let button = document.createElement("button");
        button.classList.add("playerButton");
        button.textContent = `Spieler ${i}`;
        button.addEventListener("click", () => assignPlayerToTeam(i));
        playerButtonsContainer.appendChild(button);
    }

    // Leere das Ergebnis
    document.getElementById("teamResult").innerHTML = '';
}

// Funktion zum Zuweisen eines Spielers zu einem Team
function assignPlayerToTeam(playerNumber) {
    // Filtere die verfügbaren Teams (die nicht voll sind)
    let availableTeamsFiltered = availableTeams.filter(team => teamCapacity[team - 1] < Math.floor(playersCount / teamsCount) + 1);

    if (availableTeamsFiltered.length === 0) {
        alert("Alle Teams sind voll.");
        return;
    }

    // Wähle zufällig ein Team aus den verfügbaren Teams
    let randomTeam = availableTeamsFiltered[Math.floor(Math.random() * availableTeamsFiltered.length)];

    // Weist den Spieler dem Team zu
    teamAssignments.push(`Spieler ${playerNumber} ist in Team ${randomTeam}`);
    teamCapacity[randomTeam - 1] += 1; // Erhöhe die Anzahl der Spieler im Team

    // Entferne das Team aus der Liste der verfügbaren Teams, wenn es voll ist
    if (teamCapacity[randomTeam - 1] >= Math.floor(playersCount / teamsCount) + 1) {
        availableTeams = availableTeams.filter(team => team !== randomTeam);
    }

    // Zeige das Ergebnis an
    displayTeamAssignments();

    // Deaktiviere den Button für diesen Spieler, nachdem er zugewiesen wurde
    let playerButtons = document.querySelectorAll(".playerButton");
    playerButtons[playerNumber - 1].disabled = true;
}

// Funktion zur Anzeige der Team-Zuweisungen
function displayTeamAssignments() {
    const resultDiv = document.getElementById("teamResult");
    resultDiv.innerHTML = ""; // Leert den Container

    teamAssignments.forEach(assignment => {
        const p = document.createElement("p");
        p.textContent = assignment;
        resultDiv.appendChild(p);
    });
}
