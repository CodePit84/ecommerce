let links = document.querySelectorAll("[data-delete]");

// On boucle sur les liens
for(let link of links){
    // On met un écouteur d'évènements
    link.addEventListener("click", function(e){
        // On empêche la navigation
        e.preventDefault();

        // On demande confirmation
        if(confirm("Voulez-vous supprimer cette image ?"))
            // On envoie la requête ajax
            fetch(this.getAttribute("href"), )
    
// 1:13:04

    })

}