import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsState {
  selectedItems: Product[];
}

const initialState: ProductsState = {
  selectedItems: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<Product>) {
      state.selectedItems.push(action.payload);
    },
    removeFromBasket(state, action: PayloadAction<number>) {
      state.selectedItems = state.selectedItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToBasket, removeFromBasket } = productsSlice.actions;
export default productsSlice.reducer;