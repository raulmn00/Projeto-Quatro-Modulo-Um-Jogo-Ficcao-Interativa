const prompt = require("prompt-sync")();
console.clear();
/* 
Variáveis para armazenar os status do personagem. (1,0) FEITO
Perguntas que alteram esses status do personagem. (1,0) FEITO
Laço de repetição que determinará os ciclos onde a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0) FEITO
 Variável para controle da passagem do tempo. (1,0) FEITO
 Variáveis de controle dos status e situações da história. (1,0) FEITO
Condicionais para alterações dessas variáveis. (1,5) FEITO
Funções para executar cada uma das tarefas. (1,5)  FEITO
Conteúdo de condicionais, laços, funções e objetos bem aplicados. (2,0) FEITO
 */

const protagonista = {
    nome: "",
    idade: 0,
    vivo: true,
    fome: false,
    mantimentos: 5,
    sorte: 0,
    azar: 0,
    comer: function () {
        this.fome = false;
        this.mantimentos--;
    },
    jogarDado6: function () {
        return Math.floor(Math.random() * 6 + 1);
    },
    jogarDado12: function () {
        return Math.floor(Math.random() * 12 + 1);
    },
    poderBelico: 0,
};

let contadorDias = 0;
let sobreviventes = [];
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
prompt("Tecle enter para continuar...");
while (protagonista.vivo === true) {
    if (protagonista.fome === true && protagonista.mantimentos > 0) {
        protagonista.comer();
    }
    if (protagonista.mantimentos === 0) {
        console.log(
            `${protagonista.nome}, seus mantimentos estão zerados. Você precisa urgentemente ir atrás de mais.`
        );
        prompt("Tecle enter para continuar...");
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
            let dado12 = protagonista.jogarDado12();
            if (dado12 >= 8) {
                console.log(
                    `${protagonista.nome} você deu muita sorte e encontra 8 mantimentos!`
                );
                protagonista.mantimentos += 8;
                prompt("Tecle enter para continuar...");
            } else if (dado12 <= 6) {
                console.log(
                    `${protagonista.nome} você deu sorte e encontra 4 mantimentos!`
                );
                protagonista.mantimentos += 4;
                prompt("Tecle enter para continuar...");
            } else if (dado12 < 5) {
                console.log(
                    `${protagonista.nome} você não teve sorte e encontra apenas 2 mantimentos...`
                );
                protagonista.mantimentos += 2;
                prompt("Tecle enter para continuar...");
            }
        }
    }
    console.log(`
    Nome: ${protagonista.nome}\tIdade: ${protagonista.idade}
    Sorte: ${protagonista.sorte}\tAzar: ${protagonista.azar}
    Mantimentos:${protagonista.mantimentos}\tPoder Bélico: ${protagonista.poderBelico}
    `);
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
            console.log("Você decidiu ir atrás da delegacia e recebeu +4 de poder bélico.");
            protagonista.poderBelico += 4;
            protagonista.fome = true;
            prompt("Tecle enter para continuar...");
        } else if (escolhaArmas === 2) {
            console.log("Voce decidiu ir até a loja de armas e recebeu +2 de poder bélico.");
            protagonista.poderBelico += 2;
            protagonista.fome = true;
            prompt("Tecle enter para continuar...");
        } else if (escolhaArmas === 3) {
            let dado12 = protagonista.jogarDado12();
            if (dado12 >= 8) {
                console.log(
                    `${protagonista.nome} você deu muita sorte e encontrou armas. Recebeu +8 de poder bélico!`
                );
                protagonista.poderBelico += 8;
                protagonista.fome = true;
                prompt("Tecle enter para continuar...");
            } else if (dado12 > 5 && dado12 <= 7) {
                console.log(
                    `${protagonista.nome} você deu sorte e encontrou munições. Recebeu +6 de poder bélico!`
                );
                protagonista.poderBelico += 6;
                protagonista.fome = true;
                prompt("Tecle enter para continuar...");
            } else if (dado12 < 5) {
                console.log(
                    `${protagonista.nome} você não deu tanta sorte assim e encontra apenas algumas munições. Recebeu +2 de poder bélico!`
                );
                protagonista.poderBelico += 2;
                protagonista.fome = true;
                prompt("Tecle enter para continuar...");
            }
        }
    } else if (escolhaDiaria === 2) {
        console.log(
            "Você decidiu vasculhar o perímetro. Vamos olhar ao redor e procurar zumbis."
        );
        protagonista.azar += 1;

        if (protagonista.azar >= 5) {
            console.log(
                "Vasculhando o perímetro, você encontra um grupo de zumbis..."
            );
            if (protagonista.poderBelico >= 8) {
                console.log(
                    `${protagonista.nome} você estava bem preparado e sai tranquilamente daquela situação!`
                );
                protagonista.poderBelico -= 6;
                protagonista.azar = 0;
                prompt("Tecle enter para continuar...");
            } else if (protagonista.poderBelico >= 4) {
                console.log(
                    `${protagonista.nome} por sorte você tinha armas e munições suficientes e consegue sair daquela situação...`
                );
                protagonista.poderBelico -= 4;
                protagonista.azar = 0;
                prompt("Tecle enter para continuar...");
            } else {
                console.log(
                    `${protagonista.nome} infelizmente seu poder bélico era insuficiente e você morre...`
                );
                protagonista.vivo = false;
                prompt("Tecle enter para continuar...");
            }
        }
        protagonista.fome = true;
    } else if (escolhaDiaria === 3) {
        protagonista.fome = true;
        console.log(
            "Você decidiu procurar outros sobreviventes. Espero que consigamos achar alguém."
        );
        if (protagonista.sorte >= 5) {
            let dado6 = protagonista.jogarDado6();
            if (dado6 >= 4) {
                console.log("FINALMENTE ENCONTRAMOS OUTRO SOBREVIVENTE!");
                let novoSobrevivente = prompt(
                    "Digite o nome do novo sobrevivente: "
                );
                sobreviventes.push(novoSobrevivente);
                protagonista.sorte = 0;
            } else {
                console.log(
                    `${protagonista.nome} você deu azar e não encontramos outro sobrevivente... Sorte zerada!`
                );
                prompt("Tecle enter para continuar...");
            }
        }
        protagonista.sorte += 1;
    }
    contadorDias++;
}
