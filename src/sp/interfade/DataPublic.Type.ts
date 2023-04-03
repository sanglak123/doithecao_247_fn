export interface Interfade_Card {
  id: number;
  idTypeCard: number;
  telco: string;
  img: number;
  change: boolean;
}
export interface Interfade_Value {
  id: number;
  name: string;
}

export interface Interfade_Price_Item {
  id: number;
  idCard: number;
  idValue: number;
  feesChange: number;
  feesBuy: number;
  Card: Interfade_Card;
  Value: Interfade_Value;
}
export interface Interfade_Bank_Item {
  id: number;
  name: string;
  sign: string;
}

export interface Interfade_DataPublic {
  Prices: Interfade_Price_Item[];
  Cards: Interfade_Card[];
  Banks: Interfade_Bank_Item[];
}
