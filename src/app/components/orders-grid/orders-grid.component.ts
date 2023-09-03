import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html',
  styleUrls: ['./orders-grid.component.css']
})
export class OrdersGridComponent implements OnInit {
  orders: Order[] = [];
  columnsNames: string[] = ['Cliente', 'Producto', 'Fecha creación', 'Status', 'Cantidad', 'Precio', 'Anticipo', 'Liquidación', 'Pago total', 'Subtotal', 'Factura #.', 'Capturado por'];
  public dropdownOpen = false;

  constructor() {
    this.setIsOverdue();
  }
  ngOnInit(): void {
    this.orders = this.getOrders();
    this.setIsOverdue();
  }
  onclickExport() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.orders);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Ordenes al dia.xlsx');
  }
  setIsOverdue() {
    console.log(new Date())
    this.orders.forEach((order) => {
      order.isOverdue = new Date(order.fechaPedido) > new Date();
    })
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
        status: 'Completado',
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
        status: 'Pendiente',
      },
      {
        nombreCliente: 'Andre-Pierre Gignac',
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
        status: 'Cancelado',
      },
      {
        nombreCliente: 'Nahuel Guzman',
        nombreProducto: 'Pin Tigres',
        fechaPedido: new Date('2023-08-22').toLocaleDateString(),
        cantidad: 100,
        precio: 500,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1235',
        capturadoPor: 'Tania',
        status: 'Cancelado',
      },
      {
        nombreCliente: 'Hey Banco',
        nombreProducto: 'Pin Banregio ',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado',
      },
      {
        nombreCliente: 'Santander',
        nombreProducto: 'Pin Santander',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado',
      },
      {
        nombreCliente: 'BBVA',
        nombreProducto: 'Pin BBVA',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado',
      },
      {
        nombreCliente: 'Banorte',
        nombreProducto: 'Pin Banorte',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado',
      },
      {
        nombreCliente: 'INVEX',
        nombreProducto: 'Pin Banco Invex',
        fechaPedido: new Date('2023-09-01').toLocaleDateString(),
        cantidad: 150,
        precio: 1000,
        anticipo: 200,
        liquidacion: 800,
        pagoTotal: 1000,
        subtotal: 900,
        facturaNo: 'FAC1234',
        capturadoPor: 'Tania',
        status: 'Completado',
      },
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
        status: 'Completado',
      },
    ];
  }
}
