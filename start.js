// start.js (erste Seite)
document.getElementById("startButton").addEventListener("click", function () {
    const playersCount = parseInt(document.getElementById("players").value);
    const teamsCount = parseInt(document.getElementById("teams").value);

    if (isNaN(playersCount) || isNaN(teamsCount) || playersCount <= 0 || teamsCount <= 0) {
        alert("Bitte gib eine gültige Anzahl von Spielern und Teams ein.");
        return;
    }

    // Speichern der Spieler- und Teamanzahl in LocalStorage
    localStorage.setItem("playersCount", playersCount);
    localStorage.setItem("teamsCount", teamsCount);

    // Weiterleitung zur Team-Zuweisungsseite
    window.location.href = "game.html";
});
