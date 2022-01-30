function cardapio(codigo, quantidade) {
    let precoTotal = 0
    switch(codigo) {
        case 100:
            precoTotal = 3.00 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} cachorros quentes e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um cachorro quente e o total da compra deu: R$${precoTotal}`)
            } break
        case 200:
            precoTotal = 4.00 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} hamburguers simples e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um hamburguer simples e o total da compra deu: R$${precoTotal}`)
            } break
        case 300:
            precoTotal = 5.50 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} cheeseburguers e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um cheeseburguer e o total da compra deu: R$${precoTotal}`)
            } break
        case 400:
            precoTotal = 7.50 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} baurus e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um bauru e o total da compra deu: R$${precoTotal}`)
            } break
        case 500:
            precoTotal = 3.50 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} refrigerentes e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um refrigerante e o total da compra deu: R$${precoTotal}`)
            } break
        case 600:
            precoTotal = 2.80 * quantidade
            if(quantidade > 1) {
                console.log(`Você pediu ${quantidade} sucos e o total da compra deu: R$${precoTotal}`)
            } else {
                console.log(`Você pediu um suco e o total da compra deu: R$${precoTotal}`)
            } break
        default:
            console.log(`Esse produto não existe!`)
    }
}

cardapio(600, 5)