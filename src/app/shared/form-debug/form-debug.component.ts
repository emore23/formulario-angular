import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})

/**
 * Esse arquivo imprime os dados do formulário diretamente na tela 
 */

export class FormDebugComponent implements OnInit {

  @Input() form;


  constructor() {

   }


  ngOnInit() {
  }

}
