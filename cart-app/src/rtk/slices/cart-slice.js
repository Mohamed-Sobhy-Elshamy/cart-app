import { createSlice } from "@reduxjs/toolkit";

// create slice => يكون فيها => initial state => name => reducer => add to cart =>
// function دي بيكون عليها access to state & action => delete from cart => clear =>
// باختصار هما 3 reducers

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            /*
            لما اضيف اكتر من product => يكون ف مكان اسمه => Quatity => ال product بتاعي لو وانا بضيفه
            لو موجود ميزودش العدد ف جمب ال cart 
            */
            const findProduct = state.find((product) => product.id === action.payload.id);
            // ف حالة انو لقاه ال product => ياخد ال product ده يزود عليه => Quantity
            if(findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = {...action.payload, quantity: 1}
                state.push(productClone);
            }

        },

        deleteFromCart: (state, action) => {
            return (
                state.filter((product) => product.id !== action.payload.id)
            ) // action.payload => هو ال product اللي بعتهله
        },

        clear: (state, action) => {
            return [];
        },
    }
})

// exports actions
export const {addToCart, deleteFromCart, clear} = cartSlice.actions

// export reducer
export default cartSlice.reducer;
// عايزين نجط ال cart => inside => store 