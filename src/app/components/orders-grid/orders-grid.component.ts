import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Order } from '../../models/order';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html',
  styleUrls: ['./orders-grid.component.css'],
})
export class OrdersGridComponent implements OnInit {
  orders: Order[] = [];
  ordersCopy: Order[] = [];
  columnsNames: string[] = [
    'Cliente',
    'Producto',
    'Fecha creación',
    'Status',
    'Cantidad',
    'Precio',
    'Anticipo',
    'Liquidación',
    'Pago total',
    'Subtotal',
    'Factura #.',
    'Capturado por',
  ];
  public dropdownOpen = false;
  orderStatuses = [
    { id: 'Todos', label: 'Todos' },
    { id: 'Completado', label: 'Completado' },
    { id: 'Pendiente', label: 'Pendiente' },
    // add more options
  ];
  selectedStatus: string = 'Todos';

  constructor(public date: DatePipe) {}
  ngOnInit(): void {
    this.ordersCopy = this.getOrders();
    this.orders = structuredClone(this.ordersCopy);
  }
  onclickExport() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.orders);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Ordenes al dia.xlsx');
  }
  calculateOverdue(order: Order) {
    const today = new Date().getTime();
    const createdDate = new Date(order.createDate).getTime();
    const diffInMs = today - createdDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays >= 7) {
      order.isOverdue = true;
    }
  }
  onclickStatus(status: any) {
    if (status.id === 'Todos') {
      return (this.orders = this.ordersCopy);
    } else {
      this.orders = this.ordersCopy.filter((x) => x.status === status.id);
    }

    return this.orders;
  }

  getOrders(): Order[] {
    return [
      {
        clientName: 'Juan Pérez',
        productName: 'Pin Concha Pan',
        createDate: new Date('2023-09-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'María González',
        productName: 'Pin Oxxo',
        createDate: new Date('2023-09-02'),
        quantity: 100,
        price: 500,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1235',
        createdBy: 'Tania',
        status: 'Pendiente',
      },
      {
        clientName: 'Andre-Pierre Gignac',
        productName: 'Pin Oxxo',
        createDate: new Date('2023-09-02'),
        quantity: 100,
        price: 500,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1235',
        createdBy: 'Tania',
        status: 'Cancelado',
      },
      {
        clientName: 'Nahuel Guzman',
        productName: 'Pin Tigres',
        createDate: new Date('2023-08-22'),
        quantity: 100,
        price: 500,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1235',
        createdBy: 'Tania',
        status: 'Cancelado',
      },
      {
        clientName: 'Hey Banco',
        productName: 'Pin Banregio ',
        createDate: new Date('2023-09-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'Santander',
        productName: 'Pin Santander',
        createDate: new Date('2023-08-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'BBVA',
        productName: 'Pin BBVA',
        createDate: new Date('2023-07-21'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'Banorte',
        productName: 'Pin Banorte',
        createDate: new Date('2023-09-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'INVEX',
        productName: 'Pin Banco Invex',
        createDate: new Date('2023-09-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
      {
        clientName: 'Juan Pérez',
        productName: 'Pin Concha Pan',
        createDate: new Date('2023-09-01'),
        quantity: 150,
        price: 1000,
        advancePayment: 200,
        settlement: 800,
        total: 1000,
        subtotal: 900,
        invoiceNumber: 'FAC1234',
        createdBy: 'Tania',
        status: 'Completado',
      },
    ];
  }
}
