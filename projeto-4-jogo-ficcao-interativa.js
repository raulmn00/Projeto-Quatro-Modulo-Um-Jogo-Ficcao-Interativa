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
            console.log(
                "Infelizmente voce se deparou com um grupo enorme de zumbis e eles te mataram."
            );
            protagonista.vivo = false;
            continue;
        }
    }
    console.log(`
    Nome: ${protagonista.nome}\tIdade: ${protagonista.idade}
    Sorte: ${protagonista.sorte}\tAzar: ${protagonista.azar}
    Mantimentos:${protagonista.mantimentos}
    `)
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
        protagonista.azar += 1;

        if (protagonista.azar >= 5) {
            console.log(
                "Vasculhando o perímetro, você encontra um grupo de zumbis. Que azar..."
            );
            console.log("O computador irá escolher o seu destino...");
            let dado = protagonista.jogarDado6();
            if (dado >= 3) {
                console.log("Hoje é seu dia de sorte e você sobreviveu...");
                protagonista.azar = 0;
            } else {
                console.log(
                    "Infelizmente não foi seu dia de sorte, e você morreu..."
                );
                protagonista.vivo = false;
                continue;
            }
        }
        protagonista.fome = true;
    } else if (escolhaDiaria === 3) {
        protagonista.fome = true;
        console.log(
            "Você decidiu procurar outros sobreviventes. Espero que consigamos achar alguém."
        );
        if (protagonista.sorte >= 5) {
            console.log("FINALMENTE ENCONTRAMOS OUTRO SOBREVIVENTE!");
            let novoSobrevivente = prompt(
                "Digite o nome do novo sobrevivente: "
            );
            sobreviventes.push(novoSobrevivente);
            protagonista.sorte = 0;
        }
        protagonista.sorte += 1;
    }
    contadorDias++;
}
