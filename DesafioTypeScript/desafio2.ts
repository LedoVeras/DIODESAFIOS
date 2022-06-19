/*
Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

[...]
*/

enum Profissoes{
    Atriz,
    Padeiro,
}

interface IPessoa {
    nome: string;
    idade: number;
    profissao: Profissoes;
}

class Pessoa implements IPessoa {
    nome;
    idade;
    profissao;

    constructor(nome: string, idade: number , profissao: Profissoes) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

const pessoa_1 = new Pessoa("maria", 29, Profissoes.Atriz);
const pessoa_2 = new Pessoa("roberto", 19, Profissoes.Padeiro);
const pessoa_3 = new Pessoa("laura", 32, Profissoes.Atriz);
const pessoa_4 = new Pessoa("carlos", 19, Profissoes.Padeiro);