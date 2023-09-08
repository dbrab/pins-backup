export interface Order {
  clientName: string;
  productName: string;
  createDate: Date;
  quantity: number;
  price: number;
  advancePayment: number;
  settlement: number;
  total: number;
  subtotal: number;
  invoiceNumber: string;
  createdBy: string;
  status: string;
  isOverdue?: boolean; // Cuando ha sido creada hace mas de 8 dias
}
