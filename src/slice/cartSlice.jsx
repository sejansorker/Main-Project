import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: []
  },
  reducers: {
    cartTotal: (state, action) => {
      console.log(state.cartItems, "state");
      console.log(action.payload, "action");
      state.cartItems.push(action.payload)
    }
  }
})
export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer