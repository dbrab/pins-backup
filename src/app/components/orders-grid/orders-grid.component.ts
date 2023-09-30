import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { OrderService } from '../services/order.service';
import { Order } from 'src/app/models/order';
import { StatusService } from '../services/status.service';
import { Status } from 'src/app/models/status';
@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html',
  styleUrls: ['./orders-grid.component.css'],
})
export class OrdersGridComponent implements OnInit {
  orders: Order[] = [];
  ordersCopy: Order[] = [];
  columnsNames: string[] = [
    'Id',
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
  orderStatuses = [];
  selectedStatus: string = 'Todos';

  constructor(
    public date: DatePipe,
    private orderService: OrderService,
    private statusService: StatusService
  ) {}
  ngOnInit(): void {
    this.selectOrders();
    this.selectStatus();
  }
  selectOrders() {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
      this.ordersCopy = structuredClone(this.orders);
    });
  }
  selectStatus() {
    this.statusService.getStatus().subscribe((data: Status[]) => {
      this.orderStatuses = data;
      this.orderStatuses.push({ key: 'Todos', name: 'Todos' })
    });
  }
  onclickExport() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.orders);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Ordenes al dia.xlsx');
  }
  calculateOverdue(order: Order) {
    const today = new Date().getTime();
    const createdDate = new Date(order.createdDateTime).getTime();
    const diffInMs = today - createdDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays >= 7) {
      order.isOverdue = true;
    }
  }
  onclickStatus(status: any) {
    if (status.key === 'Todos') {
      return (this.orders = this.ordersCopy);
    } else {
      this.orders = this.ordersCopy.filter((x) => x.statusKey === status.key);
    }

    return this.orders;
  }
}
