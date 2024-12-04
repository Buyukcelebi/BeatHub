export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  priceAmount: number;
  currency: string;
}

export interface SubscriptionStatus {
  isActive: boolean;
  expirationDate: string | null;
  productId: string | null;
}
