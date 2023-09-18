import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state,action) => {
            const itemToAdd = action.payload;
            const existingItem = state.items.find(item => item._id === itemToAdd._id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                state.items.push({ ...itemToAdd, count: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(state.items));

        },
        removeItem: (state,action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.setItem('cart',JSON.stringify(state.items));
        }
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;