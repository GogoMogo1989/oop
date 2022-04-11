class ClassPoem{
    constructor(authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet){
        this.author = authorFromInternet,
        this.year = yearFromInternet,
        this.title = titleFromInternet,
        this.text = textFromInternet
    }      

    makePage(){
        console.log(`
            Title:${this.title}

            Author:${this.author}

            ${this.text}   
            ${this.year}

        `)
    }

}

const poemData = new ClassPoem("Weöres Sándor",1962 ,"Én Hasadás",`Utca sarkon várok rám,
                                                                   Félórája is van tán
                                                                   Az értelem felragyog,
                                                                   Nem jövök mert itt vagyok.`
)
console.log(poemData.year)

poemData.makePage()

class ForeignPoem extends Poem{
    constructor(authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet, translater){
        super(authorFromInternet, yearFromInternet, titleFromInternet, textFromInternet)
        this.translater = translater
    }

    makePage(){
        console.log(`
            Title:${this.titleFromInternet}

            Author:${this.authorFromInternet}
            Translater: ${this.translater}

            ${this.textFromInternet}   
            ${this.yearFromInternet}

        `)
    }

}

const weoresPoem = new ForeignPoem("Weöres Sándor",1962 ,"Én Hasadás",`Utca sarkon várok rám,
Félórája is van tán
Az értelem felragyog,
Nem jövök mert itt vagyok.`, "Alan Dixon"
)

weoresPoem.makePage()
