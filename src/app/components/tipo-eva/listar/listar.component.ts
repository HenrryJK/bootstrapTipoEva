import { Component, OnInit } from '@angular/core';
import { Tipoeva } from 'src/app/models/tipoeva';
import { Router } from '@angular/router';
import { TipoevaService } from 'src/app/services/tipoeva.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  tipoevas : any;
  constructor(private tipoEvaService:TipoevaService,
    private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  delTipoeva(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoEvaService.deleteTipoeva(num).subscribe(
          response=>{
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
          })        
      }
    })  
  }
  listar():void{
    this.tipoEvaService.getTipoevas().subscribe(
      (data)=>{        
        this.tipoevas = data['cursor_tip_evaluacion'];
        console.log("TipoEvas",this.tipoevas);        
      },(err)=>{
        console.log("Error en el listar-tipo-eva-component")
      }
    ) 
  }
  delLogica(num:number):void{
   
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tipoEvaService.updateLogica(num).subscribe(
          response=>{
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success')
          })        
      }
    })  
  }
}
