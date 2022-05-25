const form = document.querySelector("form");


// 2 methodes (lignes 5 à 19) pour supprimer un item de la Todo list

// 1ère méthode pour cette fonction

const deleteItem = (item, parent) => {
    parent.removeChild(item);
}


/**  2ème méthode pour cette fonction, ne pas oublier d'enlever 
la ligne 35 le ul avec cette méthode


const deleteItem = (item) => {
    item.remove();
}

*/


const createTodo = (event) => {
    event.preventDefault();

    const input = document.querySelector("input");

    const newLi = document.createElement("li");

// valeur d'entrée dans l'input copiée dans le li créé

    newLi.innerHTML = input.value;

// créer le bouton pour supprimer 

    const newBtn = document.createElement("button");

// au clic du bouton supprimer se rendre à la fonction deleteItem

    newBtn.addEventListener("click", () => deleteItem(newLi, ul));

// mettre le newBtn (bouton qui a été créé) dans le newLi (li qui a été créé)

    newLi.appendChild(newBtn);
    const ul = document.querySelector("ul");

// mettre le newLi (li qui a été crée) dans le ul

    ul.appendChild(newLi);

// on efface la valeur de l'input

    input.value = "";

}

form.addEventListener("submit", (event) => createTodo(event));
