import { createInterface } from "node:readline/promises";

async function main(): Promise<void> {
    const ler = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let numero: number;
    
    do {
        numero = Number(
            await ler.question("Digite um número ou 0 para sair: ")
        );

        if (numero !== 0){
            console.log(`Você digitou: ${numero}`);
        }
    } while (numero!==0);

    console.log("Programa encerrado.");

    ler.close();
}

main();