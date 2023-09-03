import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html',
  styleUrls: ['./orders-grid.component.css']
})
export class OrdersGridComponent {
  orders: Order[] = this.getOrders();
  columnsNames: string[] = ['Cliente', 'Producto', 'Fecha creación', 'Status', 'Cantidad', 'Precio', 'Anticipo', 'Liquidación', 'Pago total', 'Subtotal', 'Factura #.', 'Capturado por'];
  public dropdownOpen = false;

  constructor() {

  }
  getOrders(): any[] {
    return [
      {
        nombreCliente: 'Juan Pérez',
        nombreProducto: 'Pin Concha Pan',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado'
      },
      {
        nombreCliente: 'María González',
        nombreProducto: 'Pin Oxxo',
        fechaPedido: new Date('2023-09-02').toLocaleDateString(),
        cantidad: 100,
        precio: 500,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1235',
        capturadoPor: 'Tania',
        status: 'Pendiente'
      },
      {
        nombreCliente: 'María González',
        nombreProducto: 'Pin Oxxo',
        fechaPedido: new Date('2023-09-02').toLocaleDateString(),
        cantidad: 100,
        precio: 500,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1235',
        capturadoPor: 'Tania',
        status: 'Cancelado'
      },
      // Más objetos de tipo Pedido aquí
    ];
  }
}
