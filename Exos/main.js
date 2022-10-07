let arrNav = {
    menu: "menu.html",
    produit: "produit.html",
    contact: "contact.html"
}

let navItems = ['Menu', 'Produit', 'Contact'];
let navLinks = ['menu.html', 'produit.html', 'contact.html'];

for (let i = 0; i < navItems.length; i++) {
    let list = document.createElement('li');
    let link = document.createElement('a');
    link.innerText = navItems[i];

    link.setAttribute("href", navLinks[i]);

    document.querySelector('#navList').appendChild(list).appendChild(link);

}

let pOne = "Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim";
let pTwo = "Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!";

for (let i = 0; i < 7; i++) {
    let p = document.createElement('p');
    p.innerText = pOne;
    document.querySelector('#divOne').appendChild(p);
}
for (let i = 0; i < 7; i++) {
    let p = document.createElement('p');
    p.innerText = pTwo;
    document.querySelector('#divTwo').appendChild(p);
}


/* correction */

/*
  	
<nav>
	<ul class="list-navigation"
</nav

.list-navigation{
    list-style : none;
}

var navName = ['Menu', 'Produit', 'Contact'];

var navLink = ['menu.html', 'produit.html', 'contact.html'];

var navUl = document.querySelector(".list-navigation");

function ajouterLienNav(lien, nom){

	if(navName.length == navLink.length){
  	for(let index = 0; index < navName.length; index++){
    let elementLi = document.createElement('li')
    let elementLink = document.createElement('a');
    elementLink.setAttribute('href', lien[index]);
    elementLink.innerHTML = nom[index];
    elementLi.appendChild(elementLink);
    navUl.appendChild(elementLi);
    }
  }
  else
  {
  	console.log("Les deux tableaux n'ont pas la même taille.")
  }

}


ajouterLienNav(navLink, navName);

<div class="center">
	<div class="div-article center">
  </div>
  	<div class="div-second-article center">
  </div>
</div>

.center
{
    text-align: center;
}

.div-article{
    border: 1px solid black;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
}

.div-article :nth-child(4){
    color: blue;
}

.div-second-article{
    border: 1px dashed red;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
}

.div-second-article :nth-child(5){
    color: red;
}

// en JS
function generateurDeP(elementParent, contenus, nbrdefois {
    for(let index = 0; index < nbredefois; index++) {
        let newElement = document.createElement('p';
        newElement.innerHTML = contenus;
        let getParent = document.querySelector(elementParent;
        getParent.appendChild(newElement;
    }
}

generateurDeP('.div-article', 'Lorem cupidatat officia dolor excepteur occaecat sint excepteur est labore minim.', 7 );
generateurDeP('.div-second-article', 'Accusantium necessitatibus nihil est ad pariatur officiis corporis possimus!.', 7)

*/