function calcularNota(nomeAluno, n1, n2, n3) {
    const notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    notas.push((a, b) => a > b ? 1: -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Nome do aluno: ${nomeAluno}. Nota 1: ${n1}. Nota 2: ${n2}. Nota 3: ${n3}. Resultado final: ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNota('Pedro', 5, 9, 4)