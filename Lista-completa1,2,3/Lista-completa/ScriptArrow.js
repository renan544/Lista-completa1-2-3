//Exercicio 1
dobro = (n) => {
    return n * 2
}
console.log("O dobro do parametro digitado é: " + dobro(40))

//Exercicio 2
saudacao = () => "Olá a Todos"
console.log(saudacao())

//Exercicio 3
soma = (a, b) => a + b
console.log("A somas dos numeros nos parentes é " + soma(20, 15))

//Exercicio 4
verificar = (n) => n % 2 == 0 ? "É par" : "É impar"
console.log(verificar(3))

//Exercicio 5
areaQuadrado = (a) => a * a
console.log("A area do quadrado é " + areaQuadrado(5))

//Exercicio 6
idade = (n) => n >= 18 ? "Maior Idade" : "Menor idade"
console.log(idade(17))

//Exercicio 7
converter = (dolar) => dolar * 5
console.log("O valor convertido para reais é: R$" + converter(50))

//Exercicio 8 
pessoa = (nome, idade) => "Meu nome é " + nome + " tenho " + idade + " anos de idade"
console.log(pessoa("Renan", 20))

//Exercicio 9
multiplicar = (valor) => valor * 10
console.log("O valor multiplicado é " + multiplicar(20))

//Exercicio 10
contarCaracteres = (palavra) => "A quantidade de caractéres é " + palavra.length;
console.log(contarCaracteres("Sim"));

//Exercicio 11
const numeros = [-5, 10, -2, 15, -1, 3];
const positivos = numeros.filter(n => n > 0);
console.log("Positivos:", positivos);

//Exercicio1 2
const nomes = ["jhonny", "jotaro", "josuke"];
const maiusculos = nomes.map(n => n.toUpperCase());
console.log("Nomes em Alta:", maiusculos);

//Exercicio 13
const usuarios = [{ id: 1, nome: "A" }, { id: 3, nome: "B" }];
const busca = usuarios.find(u => u.id === 3);
console.log("Usuário ID 3:", busca);

//Exercicio 14
const precos = [100, 200, 300];
const comImposto = precos.map(p => p * 1.15);
console.log("Preços com Imposto:", comImposto);

//Exercicio 17
const totalCarrinho = precos.reduce((acc, p) => acc + p, 0);
console.log("Total do Carrinho:", totalCarrinho);

//Exercicio 20
const criarProduto = (nome, categoria) => ({ nome, categoria });
console.log("Novo Objeto:", criarProduto("Teclado", "TI"));

//Exercicio 21
const criarUsuario = (id, username) => ({ id, username, status: "Ativo" });
console.log("21. Objeto Gerado:", criarUsuario(101, "vini_dev"));
//Exercicio 22
const alunos = [
    { nome: "Jhonny", nota: 8.5 },

    { nome: "Jotaro", nota: 5.0 },

    { nome: "Josuke", nota: 9.2 }
];
const aprovados = alunos.filter(a => a.nota >= 7).map(a => a.nome);
console.log("22. Nomes dos Aprovados:", aprovados);

//Exercicio 23
const precos = [45, 12, 89, 5, 110];
precos.sort((a, b) => b - a);
console.log("23. Preços Ordenados (Maior p/ Menor):", precos);

//Exercicio 24
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = nums

    .filter(n => n % 2 === 0) 

    .map(n => n * 2)           

    .reduce((acc, n) => acc + n, 0); 
console.log("24. Resultado do Encadeamento:", resultado); 

//Exercicio 25
const criarMultiplicador = x => y => x * y;

const triplicar = criarMultiplicador(3);

const quadruplicar = criarMultiplicador(4);

console.log("25. Triplicando 10:", triplicar(10)); 

console.log("25. Quadruplicando 10:", quadruplicar(10)); 

//Exercicio 26
const datasStrings = ["15/05/2024", "20/12/2025", "01/01/2026"];

const datasObjetos = datasStrings.map(data => {

    const [dia, mes, ano] = data.split("/"); 

    return { dia, mes, ano };

});
console.table(datasObjetos); 
//Exercicio 27
const itens = ['maçã', 'banana', 'uva', 'laranja', 'limão', 'abacate'];

const estoqueContado = itens.reduce((contador, fruta) => {

    contador[fruta] = (contador[fruta] || 0) + 1;

    return contador;

}, {});

console.log("27. Frequência de itens:", estoqueContado);

//Exercicio 28
const calcular = (a, b, operacao) => operacao(a, b);
const soma = (x, y) => x + y;
const potencia = (x, y) => Math.pow(x, y);
console.log("28. Usando soma via HOF:", calcular(5, 5, soma));
console.log("28. Usando potência via HOF:", calcular(2, 3, potencia));

//Exercicio 29

const boletim = [

    { nome: "Jhinny", notas: [7, 8, 9] },

    { nome: "Josuke", notas: [10, 9, 10] }

];

const mediasFinal = boletim.map(aluno => ({

    nome: aluno.nome,

    media: (aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length).toFixed(1)

}));

console.log("29. Médias Finais:", mediasFinal);



//Exercicio 30
class ContadorTempo {
    constructor() {
        this.segundos = 0;

    }
    iniciar() {
        this.timer = setInterval(() => {
            this.segundos++;
            console.log(`30. Tempo decorrido: ${this.segundos}s`);
            if (this.segundos >= 3) clearInterval(this.timer); 
        }, 1000);

    }

}
const meuRelogio = new ContadorTempo();
meuRelogio.iniciar();