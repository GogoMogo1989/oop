class ClassPoem{
    constructor(authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet){
        this.author = authorFromInternet,
        this.year = yearFromInternet,
        this.title = titleFromInternet,
        this.text = textFromInternet
    }      
}

const poemData = new ClassPoem(1962, "Weöres Sándor","Én Hasadás",`Utca sarkon várok rám,
                                                                   Félórája is van tán
                                                                   Az értelem felragyog,
                                                                   Nem jövök mert itt vagyok.`
)
console.log(poemData)
