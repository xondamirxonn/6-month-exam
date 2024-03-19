import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import React from "react";
import product, { ProductLength, add, remove } from "./reducer/product-reducer";
import { saveState } from "../config/storage";
const StoreMiddleWere = createListenerMiddleware();
export const store = configureStore({
  reducer: {
    product,
  },
  middleware: (middleware) => middleware().prepend(StoreMiddleWere.middleware),
});

StoreMiddleWere.startListening({
  matcher: isAnyOf(add, remove),
  effect: (_, api) => {
    api.dispatch(ProductLength());
  },
});

store.subscribe(() => {
  saveState("product", store.getState().product);
});
