// 13. Nota com bônus de presença. Leia duas notas e a frequência em %. Com frequência abaixo de 75%, reprova direto. Com frequência acima de 90%, a média ganha +0,5 (sem passar de 10). Depois aplique: 6 ou mais aprovado, abaixo disso reprovado.

const firstGrade = Number(prompt("Primeira nota:"));
const secondGrade = Number(prompt("Segunda nota:"));
const attendance = Number(prompt("Frequência (%):"));

if (attendance < 75) {
    console.log("Reprovado por frequência");
} else {
    let average = (firstGrade + secondGrade) / 2;

    if (attendance > 90) {
        average = Math.min(average + 0.5, 10);
    }

    console.log(`Média final: ${average.toFixed(2)}`);

    if (average >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}