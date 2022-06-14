const prompt = require("prompt-sync")();
console.clear();

const protagonista = {
    nome: "",
    idade: 0,
    vivo: true,
    fome: false,
    sono: false
};

let qtdAcoes = 0;
let contadorDias = 0;
protagonista.nome = prompt("Digite o nome do protagonista: ");
protagonista.idade = +prompt("Digite a idade do protagonista: ");
console.log("Infelizmente é isso. O mundo acabou, os mortos andam pela terra e toda ficção sobre zumbis era uma mentira.");
console.log("Eles são mais rápidos, mais inteligentes e muito mais fortes do que a humanidade previu, e isso, só acelerou o processo do apocalipse.");
console.log(`Mas, milagrosamente, algumas pessoas conseguiram sobreviver e você ${protagonista.nome} é uma delas.`);
console.log("Agora, você precisa continuar vivo o máximo que conseguir...");
while(protagonista.vivo === true){
    if(qtdAcoes === 5){
        protagonista.fome = true;
        protagonista.sono = true;
    }
    console.log(`É o dia ${contadorDias}º, voce acorda e precisa decidir o que fazer hoje!`);
    console.log(`
    [1] - Você decide ir atrás de mantimenetos.
    [2] - Você decide vasculhar o perímetro e ter certeza de sua segurança.
    [3] - Você decide procurar outros sobreviventes.`);
    let escolhaDiaria = +prompt("Digite sua escolha: ");
    if(escolhaDiaria === 1){
        console.log("Você decidiu ir atrás de mantimentos. Vamos pegar nosso mapa local e procurar.");
        console.log(`Ao ler o mapa, você encontrou 2 lugares próximos que podem ter mantimentos. Qual local você deseja procurar?
        [1] - Um supermercado.
        [2] - Uma farmácia.
        [3] - Ambos os locais`);
        let escolhaMantimentos = +prompt("Digite sua escolha: ");
        if(escolhaMantimentos === 1){
            qtdAcoes++;
            console.log("Você decidiu ir atrás do supermercado.");
        }else if(escolhaMantimentos === 2){
            qtdAcoes++;
            console.log("Voce decidiu ir até a farmácia.");
        }else if(escolhaMantimentos === 3){
            qtdAcoes += 2;
            console.log("Você decide procurar em ambos os locais.");
            console.log("Infelizmente voce se deparou com um grupo enorme de zumbis e eles te mataram.");
            protagonista.vivo = false;
        }
    }else if(escolhaDiaria === 2){
        console.log("Você decidiu vasculhar o perímetro. Vamos olhar ao redor e procurar zumbis.");
    }else if(escolhaDiaria === 3){
        console.log("Você decidiu procurar outros sobreviventes. Espero que consigamos achar alguém.");
    }
    contadorDias++;
}


