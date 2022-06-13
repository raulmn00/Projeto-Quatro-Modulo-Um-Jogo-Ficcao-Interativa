const prompt = require("prompt-sync")();
console.clear();

const personagem = {
    nome: "",
    idade: "",
    objetivo: false,
    fome: false,
    sono: false,
    determinacao: 100,
    dormir: function () {
        this.determinacao += 10;
    },
};

let contadorHoras = 0;

let periodoManha = true;
let periodoTarde = true;
let periodoNoite = true;

while (personagem.objetivo === false) {
    while(periodoManha === true){
        console.log(`Passaram ${contadorHoras} horas da manhã.`);
        contadorHoras++;
        if(contadorHoras === 8){
            periodoManha = false;
        }
    }
    while(periodoTarde === true){
        console.log(`Passaram ${contadorHoras} horas da tarde.`);
        contadorHoras++;
        if(contadorHoras === 16){
            periodoTarde = false;
        }
    }
    while(periodoNoite === true){
        console.log(`Passaram ${contadorHoras} horas da noite.`);
        contadorHoras++;
        if(contadorHoras === 24){
            periodoNoite = false;
        }
    }
    let perguntaObjetivo = prompt(
        "Voce atingiu seu objetivo? (S/N)"
    ).toUpperCase();
    if (perguntaObjetivo === "S") {
        personagem.objetivo = true;
    } else {
        console.log("Voce ainda não atingiu seu objetivo...");
    }
}
