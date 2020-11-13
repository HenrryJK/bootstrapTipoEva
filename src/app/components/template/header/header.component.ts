import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prueba():void{
    Swal.fire(
    'Good Job!' ,
    'You clicked the button' , 'success'
    )
  }
}
