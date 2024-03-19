import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";
const initialState = loadState("product") || {
  products: [],
  count: 0,
};
const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      const prod = state.products.find((item) => item.id === action.payload.id);
      if (!prod) {
        return {
          ...state,
          products: [
            ...state.products,
            {
              ...action.payload,
            },
          ],
        };
      }
      console.log(state, action);
      return state;
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
    ProductLength: (state) => {
      return {...state, count: state.products.length}
    }
  },

});

export default product.reducer;

export const { add, remove, ProductLength } = product.actions;
