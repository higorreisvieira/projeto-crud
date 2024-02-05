import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  colunas = ["Situacao", "Nome", "Rg", "Departamento", "Ações", "Excluir"]

  constructor( private funcionarioService: FuncionarioService, public dialog: MatDialog){}

  ngOnInit(): void {
    // Quando o componente home é renderizado, este método é executado

    // Chamada ao serviço para obter a lista de funcionários  
    this.funcionarioService.GetFuncionarios().subscribe(data => {
      // Extrai os dados recebidos
      const dados = data.dados;

      // Formata a data de criação para o formato pt-br
      dados.map((item) => {
        item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString("pt-BR")
      })

      this.funcionarios = data.dados;
      this.funcionariosGeral = data.dados;
    });    
  }

  // Função para realizar a busca de funcionários
  search(event : Event) {
    // Obtém o valor da entrada de busca
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    // Aqui filtra os funcionários com base no valor da busca
    this.funcionarios = this.funcionariosGeral.filter(funcionario => {
      return funcionario.nome.toLocaleLowerCase().includes(value);
    })
  }

  OpenDialog(id : number) {
      this.dialog.open(ExcluirComponent, {
        width: '450px',
        height: '350px',
        data: {
          id: id
        }

      });

    
  }

}
