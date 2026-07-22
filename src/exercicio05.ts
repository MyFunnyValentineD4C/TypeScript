import { createInterface } from "node:readline/promises";

async function main(): Promise<void> {
    const ler = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const limite: number = Number(
        await ler.question("Digite o limite da contagem: ")
    );

    let contador : number = 1;

    while (contador <= limite) {
        console.log(`Contador: ${contador}`);
        contador++;
    }

    ler.close();
}

main();