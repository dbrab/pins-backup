
export interface Order {
  id: number;
  clientName: string;
  productName: string;
  status: string;
  quantity: number;
  price: number;
  total: number;
  subtotal: number;
  payInAdvance: number;
  createdDateTime: string;
  updatedDateTime: string;
  createdBy: string;
  updatedBy: string;
  invoiceNumber: string;
  paymentDate: string;
  trackingNumber: string;

  isOverdue?: boolean; // When the order has been created more than 7 days ago
}
