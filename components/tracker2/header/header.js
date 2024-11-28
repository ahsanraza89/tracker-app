"use client"
import { store } from "@/store/store"
import { Provider, useSelector } from "react-redux"


export default function Header (){
  return  <Provider store={store}>
    <MyHeader></MyHeader>
    </Provider>
}

 function MyHeader (){

    const { balance } = useSelector((store) => store);

    return <div>
    <h5 style={{ fontSize: '25px', fontWeight: 'bold' }}>Expense Tracker By Ahsan </h5>

<div className='my-3' >
  <h3 style={{ fontSize: '22px', fontWeight: 'bold' }} >Current Balance</h3>
  <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>${balance}</h2>
</div>

    </div>
}