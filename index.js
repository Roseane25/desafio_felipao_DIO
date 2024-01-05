console.log("Desafio Classificador de nível de Herói")

let nomeDoHeroi = "Trall"
let xpDoHeroi = 7.000

let nivelDoHeroi
if (xpDoHeroi < 1.000) {
    nivelDoHeroi = "Ferro"

} else if (xpDoHeroi <= 2.000) {
    nivelDoHeroi = "Bronze"

} else if (xpDoHeroi <= 5.000) {
    nivelDoHeroi = "Prata"

} else if (xpDoHeroi <= 7.000) {
    nivelDoHeroi = "Ouro"

} else if (xpDoHeroi <= 8.000) {
    nivelDoHeroi = "Platina"

} else if (xpDoHeroi <= 9.000) {
    nivelDoHeroi = "Ascendente"

} else if (xpDoHeroi <= 10.001) {
    nivelDoHeroi = "Imortal"

} else {
    nivelDoHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + ", está no nível de " + nivelDoHeroi);





