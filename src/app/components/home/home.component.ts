import { Component } from '@angular/core';
import { Metric } from 'src/app/models/metric';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  metrics: Metric[] = [];
  constructor() {
    this.metrics = this.getMetrics();
  }

  getMetrics(): Metric[] {
    return [
      {
        title: 'Pedidos completados',
        value: '50',
        subtitle: `Últimos 30 días`,
        svg: 'done.svg'
      },
      {
        title: 'Pedidos pendientes',
        value: '40',
        subtitle: `Últimos 30 días`,
        svg: 'pending.svg'
      },
      {
        title: 'Pedidos cancelados',
        value: '5',
        subtitle: `Últimos 30 días`,
        svg: 'cancel.svg'
      },
      {
        title: 'Total Facturado',
        value: '$300,000',
        subtitle: `Últimos 30 días`,
        svg: 'moneyMouth.svg'
      },
      {
        title: 'Total IVA',
        value: '$50,000',
        subtitle: `Últimos 30 días`,
        svg: 'tax.svg'
      },
      {
        title: 'Total por pagar',
        value: '$200,000',
        subtitle: `Últimos 30 días`,
        svg: 'moneyWings.svg'
      },
    ];
  }

}
