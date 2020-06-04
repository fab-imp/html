// lire : dans le document, recherche un element par son id : accept-condition, et surveille les evenements de type clic de souris
// si l'element est cliqué, applique la fonction
// dans le stockage local ( du navigateur ) crée un element usageConditionAccepted avec pour valeur true
// puis recherche dans la page l'élément qui a pour id bandeau rgpd et ajoute une propriété de style (css) qui va mettre son affichage a aucun, le bandeau disparait

document.getElementById("accept-condition").addEventListener("click", function(){
    localStorage.setItem('usageConditionAccepted', 'true');
    document.getElementById('bandeau-rgpd').style.display = 'none';
    // test en console
    console.log('cliqué');
});

// on surveille les evenements sur page : a la fin du chargement de la page 
document.addEventListener("DOMContentLoaded", function(event) {


    // on charge la valeur de usageConditionAccepted qui est en memoire locale et on l'assigne a la variable (let ou anciennement var) conditionStatus
    // ici la variable est crée en meme temps
    let conditionStatus = localStorage.getItem("usageConditionAccepted");

    // notion de comtaraison if then else
    // IF : si la valeur contenue dans ma variable conditionStatus
    // !== : est differente de 'true' alors je fait ce qui est entre accolades
    // piege, true est differet de 'true'
    // true est une valeur booléenne: vrai, false : faux
    // 'true' est une chaine de caracteres, j'aurais pu mettre cacahuete c'etais idem
    if (conditionStatus !== 'true'){

        // je recherche l'id bandeau-rgpd et je l'affiche 
        document.getElementById('bandeau-rgpd').style.display = 'block';
        // j'affiche dans la console du navigateur la valeur de conditionStatus
        console.log(conditionStatus);

        // ou plus long :
        // let bandeau = document.getElementById('bandeau-rgpd');
        // bandeau.style.display = 'block';
    }

// maintenant tu peux appuyer sur f12 dans le navigateur et sur l'onglet console regarder les messages de console.log aprés avoir appuyé sur valider etc
// et dans l'onglet application, tu verras la valeur usageConditionAccepted, dans le localstorage, si tu l'efface et que tu recharge la page, retour du bandeau

});