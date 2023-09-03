import { Component, Input } from '@angular/core';
import { Metric } from 'src/app/models/metric';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent {
  @Input() metric!: Metric;
  constructor() { }

}


