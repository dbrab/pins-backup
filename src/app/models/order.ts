export interface Order {
  nombreCliente: string;
  nombreProducto: string;
  fechaPedido: Date;
  cantidad: number;
  precio: number;
  anticipo: number;
  liquidacion: number;
  pagoTotal: number;
  subtotal: number;
  facturaNo: string;
  capturadoPor: string;
  status: string;
  isOverdue?: boolean; // Cuando ha sido creada hace mas de 8 dias
}
