/*
Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

[...]
*/

enum Trabalho{
    Atriz,
    Padeiro,
}

interface IPessoa {
    nome: string;
    idade: number;
    profissao: Trabalho;
}

class Pessoa implements IPessoa {
    nome;
    idade;
    profissao;

    constructor(nome: string, idade: number , profissao: Trabalho) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

const pessoa_1 = new Pessoa("maria", 29, Trabalho.Atriz);
const pessoa_2 = new Pessoa("roberto", 19, Trabalho.Padeiro);
const pessoa_3 = new Pessoa("laura", 32, Trabalho.Atriz);
const pessoa_4 = new Pessoa("carlos", 19, Trabalho.Padeiro);