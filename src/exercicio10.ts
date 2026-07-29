import{ createInterface } from "node:readline/promises";

function verficarMaioridade(idade: number): string {
    if (idade >= 18) {
        return "Maior de Idade";
    }

    return "Menor de Idade";
}

async function main (): Promise<void>{
    const leitor = createInterface({
        input: process.stdin,
        output: process.stdout
    })
}