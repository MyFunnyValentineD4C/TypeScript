import { createInterface } from "node:readline/promises";

async function main (): Promise<void> {
    const ler = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const numero: number = Number(
        await ler.question("Digite um número: ")
    );

    for (let contador: number = 1; contador <= numero; contador++){
        console.log(`Contador: ${contador} `);
    }

    ler.close();
}

main();