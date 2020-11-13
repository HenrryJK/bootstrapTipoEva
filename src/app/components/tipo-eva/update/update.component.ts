import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Tipoeva } from 'src/app/models/tipoeva';
import { TipoevaService } from 'src/app/services/tipoeva.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  tipoevas: any; 
  tipoeva:Tipoeva=new Tipoeva();
  constructor(private tipoEvaService:TipoevaService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

  }

  cargarTipoeva():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.tipoEvaService.getTipoeva(id).subscribe(
          (data)=>{
          this.tipoevas=data['cursor_tip_evaluacion'] 
          this.tipoeva.nombre=this.tipoevas[0].NOMBRE;
          this.tipoeva.id_tipo_eva=this.tipoevas[0].ID_TIPO_EVA;
        })
      }
    })
  }
  modificarTipoeva():void{
    this.tipoEvaService.updateTipoeva(this.tipoeva).subscribe(
      response=>{
        swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }


}
