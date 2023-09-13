import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.css']
})

export class ParamsComponent implements OnInit {
  @Input() parametro: any;

  parametroInicial: any;

  ngOnInit() {
    this.parametroInicial = this.parametro;

    setTimeout(() => {
      console.log('Valor inicial:', this.parametroInicial);
      console.log('Nuevo valor:', this.parametro);
      this.parametro = "nuevoValor"
    }, 30000); // 30 segundos
  }
}

