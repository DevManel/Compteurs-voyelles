
document.getElementById("countButton").addEventListener('click', function() {
    const phrase = document.getElementById("textInput").value;
    
    // Vérifier si l'utilisateur n'a rien saisi ou a entré uniquement des espaces
    if (phrase.trim() === "") {
        document.getElementById("result").innerText = "Veuillez entrer une phrase.";
        return; // Arrête la fonction si la phrase est vide
    }

    const voyelles = "aeiouyàâäéèêëîïôöùûüÿ";
    const voyellesTrouvees = [];

    // Parcourir chaque lettre de la phrase
    for (let lettre of phrase.toLowerCase()) {
        if (voyelles.includes(lettre)) {
            voyellesTrouvees.push(lettre);
        }
    }

    // Construire le message avec les voyelles trouvées et leur nombre
    const message = `Les voyelles trouvées sont : ${voyellesTrouvees.join(", ")}\n` +
        `Le nombre de voyelles dans la phrase est : ${voyellesTrouvees.length}`;

    // Afficher le résultat
    document.getElementById("result").innerText = message;
});


