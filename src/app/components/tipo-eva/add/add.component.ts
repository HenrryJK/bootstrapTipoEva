import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Tipoeva } from 'src/app/models/tipoeva';
import { TipoevaService } from 'src/app/services/tipoeva.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tipoEvaModel:Tipoeva = new Tipoeva();
  constructor(private tipoEvaService:TipoevaService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}
  tipoevaModel:Tipoeva = new Tipoeva();
  public create():void{
    this.tipoEvaService.addTipoeva(this.tipoEvaModel).subscribe(        
      response=>{
        this.router.navigate(['/listar'])
      swal.fire('Nuevo Tipo Eva', `TipoEva ${this.tipoEvaModel.nombre} creado con exito`,"success")  
      console.log(response)    
    })

    }

}
