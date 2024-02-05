import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/Response';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}Funcionario`

  constructor( private http: HttpClient ) { }

  // Criar um novo método
  GetFuncionarios() : Observable<Response<Funcionario[]>> {
  
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);

  }

  GetFuncionario(id : number) : Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>>{
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  editarFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario)
  }

  ExcluirFuncionario(id: number) : Observable<Response<Funcionario[]>> {
    return this.http.delete<Response<Funcionario[]>>(`${this.apiUrl}?id=${id}`);
  }

  
}
