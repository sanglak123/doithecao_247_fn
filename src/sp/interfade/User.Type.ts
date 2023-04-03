export interface Interfade_DataUser {
  User: Interfade_User;
  accessToken: string;
  Store: Interfade_Store_Item[];
}

export interface Interfade_User {
  id: number;
  username: string;
  displayName: string;
  fullName: string;
  adress: string;
  email: string;
  phone: string;
  avatar: number;
  surplus: string;
  admin: boolean;
  wallet_number: string;
  partner_key: string;
  api_key: string;
}

export interface Interfade_Store_Item {
  id: number;
  telco: string;
  value: string;
  count: number;
  fessBuy: number;
}
