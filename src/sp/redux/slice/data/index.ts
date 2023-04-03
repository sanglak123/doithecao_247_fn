import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import {
  Interfade_Bank_Item,
  Interfade_Card,
  Interfade_DataPublic,
  Interfade_Price_Item,
} from "@/sp/interfade/DataPublic.Type";

const initialState: Interfade_DataPublic = {
  Prices: [] as Interfade_Price_Item[],
  Cards: [] as Interfade_Card[],
  Banks: [] as Interfade_Bank_Item[],
};
const DataPublic = createSlice({
  name: "User",
  initialState,
  reducers: {
    LoadDataPublic: (state, action: PayloadAction<any>) => {
      state.Prices = action.payload.Prices;
      state.Banks = action.payload.Banks;
    },
  },
});

//Export Action
export const { LoadDataPublic } = DataPublic.actions;
//Export Selector
export const DataPublicSelector = (state: RootState) => state.DataPublic;

export default DataPublic;
