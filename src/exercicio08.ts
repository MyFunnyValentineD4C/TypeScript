import{createInterface} from "node:readline/promises";

async function main (): Promise<void> {
    const ler = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const idade: number = Number(
        await ler.question("Digite sua idade: ")
    );

    const resultado: string = idade >= 18 ? "Maior de Idade" : "Menor de Idade";
    
    console.log(resultado);

    ler.close();
}

    main();