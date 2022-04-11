function Poem({authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet}){
    this.author = authorFromInternet,
    this.year = yearFromInternet,
    this.title = titleFromInternet,
    this.text = textFromInternet
}

const poemData={
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Én Hasadás",
    textFromInternet: `Utca sarkon várok rám,
                       Félórája is van tán
                       Az értelem felragyog,
                       Nem jövök mert itt vagyok.`
}
Poem.prototype.lang = "hungarian" 
const andrasFavoritePoem = new Poem(poemData)


console.log(andrasFavoritePoem.__proto__)
console.log(Poem.prototype)




