// inserisco l'anno nel footer dinamicamente
const currentYear = document.getElementById('current-year')
currentYear.innerText = new Date().getFullYear()

// prendiamo i riferimenti ai 4 bottoni outline-info
const fourButtons = document.querySelectorAll('.btn-outline-info') // NodeList (=== array) di 4 elementi

// prendiamo i riferimenti alle prime 4 cards col gattino
let allTheMicis = document.querySelectorAll('.card') // 15 card con i gattini, sotto forma di NodeList
// trasformo allTheMicis da NodeList ad array
allTheMicis = Array.from(allTheMicis)

const fourMicis = allTheMicis.slice(0, 4) // card n. 1, 2, 3, 4
console.log(fourMicis) // le prime 4 card

const makeInvisible = function (element) {
  // l'elemento da rendere invisible arriva come parametro, lo chiamamiamo "element"
  element.classList.toggle('invisible') // toggle è un metodo che aggiunge o toglie una classe automaticamente
}

// ora ho i 4 bottoni, le 4 card e la funzione in grado di nascondere una card alla volta
// ultimo step: assegno alla pressione del primo bottone l'invocazione della funzione sul primo elemento
// ultimo step: assegno alla pressione del secondo bottone l'invocazione della funzione sul secondo elemento
// ultimo step: assegno alla pressione del terzo bottone l'invocazione della funzione sul terzo elemento
// ultimo step: assegno alla pressione del quarto bottone l'invocazione della funzione sul quarto elemento
fourButtons.forEach((butt, i) => {
  butt.addEventListener('click', function () {
    makeInvisible(fourMicis[i])
  })
})

// DIFFERENZE TRA ARRAY, NODELIST e HTMLCOLLECTION

// querySelector e querySelectorAll tornano una NODELIST
// getElementsByClassName, getElementsByTagName tornano una HTMLCOLLECTION

// su NODELIST si può utilizzare all'interno di un ciclo for perchè i suoi elementi sono esplorabili tramite indice
// su NODELIST si possono utilizzare forEach, map, filter etc.
// su NODELIST NON si possono utilizzare ad. es slice()

// su HTMLCOLLECTION si può utilizzare all'interno di un ciclo for perchè i suoi elementi sono esplorabili tramite indice
// su HTMLCOLLECTION NON si possono utilizzare forEach, map, filter etc.
// su HTMLCOLLECTION NON si possono utilizzare ad. es slice()

// entrambi questi costrutti possono essere trasformati in un vero e proprio array utilizzando Array.from()
