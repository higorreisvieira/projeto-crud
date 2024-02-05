export interface Funcionario {
    id? : number;
    nome: string;
    rg: string;
    // sobrenome: string;
    departamento: string;
    ativo: boolean;
    dataDeCriacao? : string;
    dataDeAlteracao? : string;
}