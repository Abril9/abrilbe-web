import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() fecha: string = '01/01/2020' ;

  constructor() { }

  ngOnInit(): void {
  }

}
