const poemData={
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Én Hasadás",
    textFromInternet: `Utca sarkon várok rám,
                       Félórája is van tán
                       Az értelem felragyog,
                       Nem jövök mert itt vagyok.`
}

const pDYFI=poemData.yearFromInternet
const PDAFI=poemData.authorFromInternet
/* 
console.log(pDYFI)
console.log(PDAFI) */

/* const{yearFromInternet, authorFromInternet} = poemData

console.log(yearFromInternet)
console.log(authorFromInternet) */

function funWithPointData({yearFromInternet, authorFromInternet}){  //Argumentumként megadjuk a data kulcsait, meghvíjuk, és az értékeit megkapjuk.
        console.log(yearFromInternet)
        console.log(authorFromInternet) 
}

funWithPointData(poemData)