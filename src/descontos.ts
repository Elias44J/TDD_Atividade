export function calcularDesconto(valorCompra: number): number {
    let percentual = 0;

    if (valorCompra >=200) {
        percentual = 0.20;
    } else if (valorCompra >=100) {
        percentual = 0.10;
    }

    const valorFinal = valorCompra * ( 1 - percentual);

    return Math.round((valorFinal + Number.EPSILON)* 100) / 100;
}