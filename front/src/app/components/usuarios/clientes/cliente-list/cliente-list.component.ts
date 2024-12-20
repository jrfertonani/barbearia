import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../../services/usuarios/clientes/clientes.service';
import { Clientes } from '../../../../models/usuarios/Clientes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit{

  clientes : Clientes [] = [];
  clientesGeral: Clientes [] = [];

  constructor(private serviceClientes: ClientesService) {}


  ngOnInit(): void {

    this.serviceClientes.List().subscribe(clientes => {
      this.clientes = clientes;
      this.clientesGeral = clientes;
      console.log(clientes);
    })

  }


  search(event:Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.clientes = this.clientesGeral.filter(clientes => {
      return clientes.nome.toLocaleLowerCase().includes(value);
    })

    //console.log("TARGET", target);
    //console.log("VALUE", value);
  }

  delete(id: number){
    this.serviceClientes.delete(id).subscribe(clientes => {
      window.location.reload();
    })
  }

}
