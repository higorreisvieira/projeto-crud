import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  btnAcao: string = "Editar"
  btnTitulo: string = "Editar funcionário"
  funcionario!: Funcionario; // ! Recebe

  constructor(private funcionarioService : FuncionarioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService.GetFuncionario(id).subscribe((data)=> {
      this.funcionario = data.dados;
      console.log(this.funcionario)

    });
      
  }
  editarFuncionario(funcionario : Funcionario) {
    this.funcionarioService.editarFuncionario(funcionario).subscribe((data)=> {
     this.router.navigate(['/'])

    });
  }

}


