"use client"
import { addExpense, addIncome } from "@/store/slices/expense";
import { store } from "@/store/store";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { Provider, useDispatch } from "react-redux";

export default function NewTransection(){

return  <Provider store={store}>
<NewTrans></NewTrans>
  </Provider>
}

 function NewTrans(){

    let [description , setDescription ] = useState("");
    let [amount , setAmount ] = useState(0);

    let {register , handleSubmit , formState: {errors}} = useForm();


    let dispatch = useDispatch();

    const addTransection = ()=>{
        if(amount > 0){
            dispatch(addIncome({description ,  amount: parseFloat(amount) }))
        }else{
            dispatch(addExpense({description , amount : Math.abs(parseFloat(amount))}))

        }
        setDescription("");
        setAmount(0);
    }
    return <div>
      <div className='my-4' style={{ borderBottom: '1px solid lightGrey', maxWidth: '330px', margin: '0 auto' }}>
        <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>Add New Transection</h6>
      </div>

      <form onSubmit={handleSubmit(addTransection)} >
        <label className='label-style1'> <b>Description</b></label>
        <br />

        <input {...register("description" , {required:true} )}

         value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text" className='input-style' placeholder="Detalils of Transection" />

         <br/>
          {errors.description && <span className="errors-message">This field is required</span> }
          
        <br />

        <label className='label-style2'> <b>Transection Amount</b></label>
        <br />

        <input {...register("amount" , {required:true})}

         value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number" className='input-style' placeholder="Dollar value " />

          <br/>
      {errors.amount && <span className="errors-message"> This field is required</span> } 

      <br/>   <br/>  
      <button className='btn1'> Add Transection</button>
      </form>


    </div>

 




}