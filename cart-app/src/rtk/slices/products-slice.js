import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// عايزين نجيب ال product => Async => createAsyncThunk
// بتاخد منك => type perfects => "name of slice/name of function اللي بيعمله"
// وبعدين => playload => عبارة عن function عادية => fetch URL

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data; // عشان محتاجين نشتغل ع ال data دي
})

// عايزين ن link => slice & AsyncThunk => using => extraReducers

const productsSlice = createSlice({
    initialState : [],
    name:"productsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload; // معناها ان خلي لي ال state بتاعتي => action payload تاخد كل ال => data
        })
    },
})

export const {} = productsSlice.actions;

export default productsSlice.reducer;