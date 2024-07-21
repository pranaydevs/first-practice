import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Item } from '@/typescript/cart.interface';

interface CartStateInterface  {
    cart:Item[]
}
const initialState: CartStateInterface = {
    cart:[]
};

const cartSlice = createSlice({
        name: "Cart",
        initialState,
        reducers:{
            add(state,action:PayloadAction<Item[]>){
                const temp=[...state.cart];
                console.log(temp,"TEMP")
                temp.push(action.payload);
                state.cart=temp;
                
 
            },
            remove(state,{payload}:{payload:number}){
                const temp=state.cart.filter((item)=>item.id !== payload);
                state.cart=temp;
                
            }
        }
})

export const{add,remove} = cartSlice.actions;
export default cartSlice.reducer;