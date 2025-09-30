export type Favorite = {
  sym: string;
  name: string;
  price: number;
  change: number;
};

export const favorites: Favorite[] = [
  { sym: "BTC/USDT", name: "Bitcoin", price: 114400, change: 0.2 },
  { sym: "ETH/USDT", name: "Ethereum", price: 4168.88, change: 3.07 },
  { sym: "SOL/USDT", name: "Solana", price: 212.66, change: 3.26 },
  { sym: "XAUt/USDT", name: "Tether Gold", price: 3830.85, change: 1.8 },
];
