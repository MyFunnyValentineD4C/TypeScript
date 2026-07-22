import{createInterface} from "node:readline/promises";

async function main (): Promise<void> {
    const ler = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const nomes: string [] = [];

    for (let contador: number = 1; contador <= 3; contador++) {
        const nome: string  = await ler.question(
            `Digite o ${contador}º nome: `
        );

        nomes.push(nome);
    }

    console.log("\nNomes cadastrados:");

    for (const nome of nomes) {
        console.log(nome);
    }

    console.log(`\nQuantidade de nomes: $(nomes.lenght)` );

    ler.close();
}

main();