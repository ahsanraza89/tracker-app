import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    income : 0, 
    expense : 0,
    balance : 0 ,
    transections : []
}

export const expenseSlice = createSlice({
    name : 'expense-Tracker',
    initialState ,
    reducers : {
        addIncome : (state, action) =>{
           state.income = state.income + action.payload.amount;
           state.balance += action.payload.amount;
           state.transections.push({description : action.payload.description , amount : action.payload.amount})
        },
        addExpense : (state, action) =>{
            state.expense =  state.expense + action.payload.amount;
            state.balance -= action.payload.amount;
            state.transections.push({description : action.payload.description , amount : -action.payload.amount})

        },
        deleteincome : (state, action) =>{
            let transection = state.transections[action.payload];

            if(transection.amount >0 ){
                state.income -= transection.amount;
                state.balance -= transection.amount;
            }else{
                state.expense -= Math.abs(transection.amount);
                state.balance += Math.abs(transection.amount);
            }
            state.transections.splice(action.payload,1)
        }
    }
})

export const {addIncome , addExpense , deleteincome } = expenseSlice.actions;
export default  expenseSlice.reducer;
