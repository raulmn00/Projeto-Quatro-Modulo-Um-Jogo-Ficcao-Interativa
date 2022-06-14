const prompt = require("prompt-sync")();
console.clear();

const protagonista = {
    nome: "",
    idade: 0,
    vivo: true,
    fome: false,
    mantimentos: 0,
    comer: function () {
        this.fome = false;
        this.mantimentos--;
    },
};

let qtdAcoes = 0;
let contadorDias = 0;
protagonista.nome = prompt("Digite o nome do protagonista: ");
protagonista.idade = +prompt("Digite a idade do protagonista: ");
console.log(
    "Infelizmente é isso. O mundo acabou, os mortos andam pela terra e toda ficção sobre zumbis era uma mentira."
);
console.log(
    "Eles são mais rápidos, mais inteligentes e muito mais fortes do que a humanidade previu, e isso, só acelerou o processo do apocalipse."
);
console.log(
    `Mas, milagrosamente, algumas pessoas conseguiram sobreviver e você ${protagonista.nome} é uma delas.`
);
console.log("Agora, você precisa continuar vivo o máximo que conseguir...");
while (protagonista.vivo === true) {
    if (protagonista.fome === true && protagonista.mantimentos > 0) {
        protagonista.comer();
        protagonista.energia--;
    } else if (protagonista.fome === true && protagonista.mantimentos === 0) {
        console.log(
            `${protagonista.nome}, seus mantimentos estão zerados e você está com fome. Você precisa urgentemente ir atrás de mais.`
        );
        console.log(`Ao ler o mapa, você encontrou 2 lugares próximos que podem ter mantimentos. Qual local você deseja procurar?
        [1] - Um supermercado.
        [2] - Uma loja de conveniencia.
        [3] - Ambos os locais`);
        let escolhaMantimentos = +prompt("Digite sua escolha: ");
        if (escolhaMantimentos === 1) {
            console.log("Você decidiu ir atrás do supermercado.");
            protagonista.mantimentos += 4;
            protagonista.comer();
        } else if (escolhaMantimentos === 2) {
            console.log("Voce decidiu ir até a loja de conveniencia.");
            protagonista.mantimentos += 2;
            protagonista.comer();
        } else if (escolhaMantimentos === 3) {
            console.log("Você decide procurar em ambos os locais.");
            console.log(
                "Infelizmente voce se deparou com um grupo enorme de zumbis e eles te mataram."
            );
            protagonista.vivo = false;
            continue;
        }
    }
    if (protagonista.mantimentos === 0) {
        console.log(
            `${protagonista.nome}, seus mantimentos estão zerados. Você precisa urgentemente ir atrás de mais.`
        );
        console.log(`Ao ler o mapa, você encontrou 2 lugares próximos que podem ter mantimentos. Qual local você deseja procurar?
        [1] - Um supermercado.
        [2] - Uma loja de conveniencia.
        [3] - Ambos os locais`);
        let escolhaMantimentos = +prompt("Digite sua escolha: ");
        if (escolhaMantimentos === 1) {
            console.log("Você decidiu ir atrás do supermercado.");
            protagonista.mantimentos += 4;
        } else if (escolhaMantimentos === 2) {
            console.log("Voce decidiu ir até a loja de conveniencia.");
            protagonista.mantimentos += 2;
        } else if (escolhaMantimentos === 3) {
            console.log("Você decide procurar em ambos os locais.");
            console.log(
                "Infelizmente voce se deparou com um grupo enorme de zumbis e eles te mataram."
            );
            protagonista.vivo = false;
            continue;
        }
    }
    console.log(
        `É o dia ${contadorDias}º, voce acorda e precisa decidir o que fazer hoje!`
    );
    console.log(`
    [1] - Você decide ir procurar armas para se defender.
    [2] - Você decide vasculhar o perímetro e ter certeza de sua segurança.
    [3] - Você decide procurar outros sobreviventes.`);
    let escolhaDiaria = +prompt("Digite sua escolha: ");
    if (escolhaDiaria === 1) {
        console.log(
            "Você decidiu ir atrás de armas. Vamos pegar nosso mapa local e procurar."
        );
        console.log(`Ao ler o mapa, você encontrou 2 lugares próximos que podem ter armas escondidas. Qual local você deseja procurar?
        [1] - Uma delegacia.
        [2] - Uma loja de armas.
        [3] - Ambos os locais`);
        let escolhaArmas = +prompt("Digite sua escolha: ");
        if (escolhaArmas === 1) {
            console.log("Você decidiu ir atrás da delegacia.");
            protagonista.fome = true;
        } else if (escolhaArmas === 2) {
            console.log("Voce decidiu ir até a loja de armas.");
            protagonista.fome = true;
        } else if (escolhaArmas === 3) {
            console.log("Você decide procurar em ambos os locais.");
            console.log(
                "Infelizmente voce se deparou com um grupo enorme de zumbis e eles te mataram."
            );
            protagonista.vivo = false;
            continue;
        }
    } else if (escolhaDiaria === 2) {
        console.log(
            "Você decidiu vasculhar o perímetro. Vamos olhar ao redor e procurar zumbis."
        );
        protagonista.fome = true;
    } else if (escolhaDiaria === 3) {
        protagonista.fome = true;
        qtdAcoes++;
        console.log(
            "Você decidiu procurar outros sobreviventes. Espero que consigamos achar alguém."
        );
    }
    contadorDias++;
}
