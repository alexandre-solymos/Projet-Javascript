 
 fetch("https://api.covid19api.com/")
 .then(response => response.json())
 .then((response) => {
     // Code éxécuté quand vous recevez la réponse
     console.log(response);
 })
 .catch(error => alert("Erreur : " + error));



// creation du header
let mainbackground = document.createElement('main');
mainbackground.setAttribute('class', 'header-nav');


let header = document.createElement('header');
header.setAttribute('class', 'header');
header.setAttribute('class', 'block-width');

let divbeforeone = document.createElement('div');
divbeforeone.setAttribute('class', 'include-logo-link');

let divone = document.createElement('div');
divone.setAttribute('class', 'div-header-logo');
divone.innerText = "StatsCovid";

let linkbutton = document.createElement('a');
linkbutton.setAttribute('href', 'https://github.com/alexandre427/Projet-Javascript');
linkbutton.setAttribute('title', 'GitHub');
linkbutton.setAttribute('class', 'button-right-logo')
linkbutton.setAttribute('target', '_blank');
linkbutton.innerText = "Voir le Code sur GitHub";

// le header comprend la div
mainbackground.appendChild(header);
header.appendChild(divbeforeone);
divbeforeone.appendChild(divone);
divbeforeone.appendChild(linkbutton);



// Creation section-one
 
let SectionOne = document.createElement('section');
SectionOne.setAttribute('id', 'section-one');
SectionOne.setAttribute('class', 'block-width');

let h1one = document.createElement('h1');
h1one.innerText = "Syntax Highlighter for Every Language ";

let paragrapheone = document.createElement('p');
paragrapheone.innerText = "Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in thousands of websites, including some of those you visit daily.";

let divmargin = document.createElement('div');
divmargin.setAttribute('class', 'button-contribute');


let linkcontribute = document.createElement('a');
linkcontribute.setAttribute('href', 'https://github.com/LeaVerou/prism/');
linkcontribute.setAttribute('title', 'Contribute');
linkcontribute.innerText = "Contribute";

let DivBockText = document.createElement('div');
DivBockText.setAttribute('id', 'div-block-text');


let button = document.createElement('button');
button.setAttribute('class', 'buttonhideopen');
button.innerText = "Hide / Open ";
button.setAttribute('onclick','PopPupBlock()');


function PopPupBlock() {
let popup = document.getElementById("div-block-text");
// Ici on fait en sorte que si il est en block on le rend invisible
if (popup.style.display == "none") {
// Ici on peut le rendre à nouveau visible
popup.style.display = "block";
} 
// on peut le rendre à nouveau invisible
// S il est invisible on aura toujours possibilité de le rendre visible
else { popup.style.display = "none"; }
};


let blocknumber = document.createElement('div');
blocknumber.setAttribute('id', 'block-one');


// Covid Nouveau cas

let cardnumber = document.createElement('div');
cardnumber.setAttribute('id', 'total');
cardnumber.setAttribute('class', 'card');

let statnumber = document.createElement('div');
statnumber.setAttribute('class', 'stats');

let factornumber = document.createElement('div');
factornumber.setAttribute('class', 'factor');
factornumber.innerText = "Nouveau cas";

let number = document.createElement('div');
number.setAttribute('id', 'number');
number.innerText = "";


DivBockText.appendChild(blocknumber);
blocknumber.appendChild(cardnumber);
cardnumber.appendChild(statnumber);
statnumber.appendChild(factornumber);
factornumber.appendChild(number);

// Covid Nouveau décès

let deathsnumber = document.createElement('div');
deathsnumber.setAttribute('id', 'deaths');
deathsnumber.setAttribute('class', 'card');

let statsnumber = document.createElement('div');
statsnumber.setAttribute('class', 'stats');

let deathsnumb = document.createElement('div');
deathsnumb.setAttribute('class', 'factor');
deathsnumb.innerText = "Nouveau Décès";

let deaths = document.createElement('div');
deaths.setAttribute('id', 'deathsnumber');
deaths.innerText = "";

blocknumber.appendChild(deathsnumber);
deathsnumber.appendChild(statsnumber);
statsnumber.appendChild(deathsnumb);
deathsnumb.appendChild(deaths);

// Covid Nouveau guerie

let recovernumber = document.createElement('div');
recovernumber.setAttribute('id', 'sick');
recovernumber.setAttribute('class', 'card');

let recoveredstats = document.createElement('div');
recoveredstats.setAttribute('class', 'stats');

let sicknumber = document.createElement('div');
sicknumber.setAttribute('class', 'factor');
sicknumber.innerText = "Nouveau guérie";

let sick = document.createElement('div');
sick.setAttribute('id', 'recoverednumber');
sick.innerText = "";

blocknumber.appendChild(recovernumber);
recovernumber.appendChild(recoveredstats);
recoveredstats.appendChild(sicknumber);
sicknumber.appendChild(sick);

// On refait appel à block number

let blocknumbertwo = document.createElement('div');
blocknumbertwo.setAttribute('id', 'block-one-two');

blocknumber.appendChild(blocknumbertwo);

// Covid Total de cas


let totalcardnumber = document.createElement('div');
totalcardnumber.setAttribute('id', 'total');
totalcardnumber.setAttribute('class', 'card');

let totalstatsnumber = document.createElement('div');
totalstatsnumber.setAttribute('class', 'stats');

let totalcasenumber = document.createElement('div');
totalcasenumber.setAttribute('class', 'factor');
totalcasenumber.innerText = "Cas total";

let totalnumber = document.createElement('div');
totalnumber.setAttribute('id', 'totalnumber');
totalnumber.innerText = "";


blocknumbertwo.appendChild(totalcardnumber);
totalcardnumber.appendChild(totalstatsnumber);
totalstatsnumber.appendChild(totalcasenumber);
totalcasenumber.appendChild(totalnumber);


// Covid total de décès


let deathstotal = document.createElement('div');
deathstotal.setAttribute('id', 'deaths');
deathstotal.setAttribute('class', 'card');

let deathstatstotal = document.createElement('div');
deathstatstotal.setAttribute('class', 'stats');

let deathstotalnumber = document.createElement('div');
deathstotalnumber.setAttribute('class', 'factor');
deathstotalnumber.innerText = "Décès Total";

let totaldeaths = document.createElement('div');
totaldeaths.setAttribute('id', 'totaldeaths');
totaldeaths.innerText = "";

blocknumbertwo.appendChild(deathstotal);
deathstotal.appendChild(deathstatstotal);
deathstatstotal.appendChild(deathstotalnumber);
deathstotalnumber.appendChild(totaldeaths);

 // Covid total de guérie


let recoveredtotal = document.createElement('div');
recoveredtotal.setAttribute('id', 'sick');
recoveredtotal.setAttribute('class', 'card');

let recoveredstatstotal = document.createElement('div');
recoveredstatstotal.setAttribute('class', 'stats');

let recoveredtotalnumber = document.createElement('div');
recoveredtotalnumber.setAttribute('class', 'factor');
recoveredtotalnumber.innerText = "Total de Guérie";

let totalrecovered = document.createElement('div');
totalrecovered.setAttribute('id', 'totalrecovered');
totalrecovered.innerText = "";

blocknumbertwo.appendChild(recoveredtotal);
recoveredtotal.appendChild(recoveredstatstotal);
recoveredstatstotal.appendChild(recoveredtotalnumber);
recoveredtotalnumber.appendChild(totalrecovered);



fetch("https://api.covid19api.com/summary")
 .then(response => response.json())
 .then((response) => {
     // Code éxécuté quand vous recevez la réponse
     console.log(response);

     let divone = document.getElementById('number');
     divone.innerHTML = response.Global.NewConfirmed ;

     let divtwo = document.getElementById('deathsnumber');
     divtwo.innerText = response.Global.NewDeaths;

     let divthree = document.getElementById('recoverednumber');
     divthree.innerText = response.Global.NewRecovered;


     let divfour = document.getElementById('totalnumber');
     divfour.innerHTML = response.Global.TotalConfirmed ;

     let divfive = document.getElementById('totaldeaths');
     divfive.innerText = response.Global.TotalDeaths;

     let divsix = document.getElementById('totalrecovered');
     divsix.innerText = response.Global.TotalRecovered;


 })
 .catch(error => alert("Erreur : " + error));



divmargin.appendChild(linkcontribute);

// La section one prend comprend le h1 et autre
SectionOne.appendChild(h1one);
SectionOne.appendChild(paragrapheone);
SectionOne.appendChild(divmargin);
SectionOne.appendChild(DivBockText);
SectionOne.appendChild(button);




// Section deux
let SectionTwo = document.createElement('section');
SectionTwo.setAttribute('id', 'section-two');
SectionTwo.setAttribute('class', 'block-width');

let h2one = document.createElement('h2');
h2one.setAttribute('class', 'color-h2');
h2one.innerText = "Reasons Why People Love ";

let spanH2 = document.createElement('span');
spanH2.innerText = "Prism.js";

let divflex = document.createElement('div');
divflex.setAttribute('class', 'div-flex');

let divleftflex = document.createElement('div');
divleftflex.setAttribute('class', 'div-left-flex');

let divrightflex = document.createElement('div');
divrightflex.setAttribute('class', 'div-right-flex');

SectionTwo.appendChild(h2one);
h2one.appendChild(spanH2);
SectionTwo.appendChild(divflex);
divflex.appendChild(divleftflex);
divflex.appendChild(divrightflex);

for(let i = 0; i < 3; i++){
let spanleft = document.createElement('span');
spanleft.setAttribute('class', 'span-left');
spanleft.innerText = "Dead Simple ";

divleftflex.appendChild(spanleft);

}


for(let i = 0; i < 3; i++){
let spanright = document.createElement('span');
spanright.setAttribute('class', 'span-left');
spanright.innerText = "Highly Intuitive ";

divrightflex.appendChild(spanright);

}


// ici on affiche toutes les balises créer
// Soit le paragaphe
// La section

let body = document.querySelector('body');
body.appendChild(mainbackground);
body.appendChild(SectionTwo);


let headerblock = document.querySelector('main');
headerblock.appendChild(SectionOne);
