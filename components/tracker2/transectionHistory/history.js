"use client"
import "./history.css"
import {  deleteincome } from "@/store/slices/expense";
import { store } from "@/store/store"
import { Provider, useDispatch, useSelector } from "react-redux"

export default function History (){
  return  <Provider store={store}>
    <MyHistory></MyHistory>
  </Provider>

}

function MyHistory (){

    let dispatch = useDispatch();

    const deleteTransection = (index)=>{

        dispatch(deleteincome(index));
    }

    const {transections } = useSelector((store)=> store)

    return <div>
         <div className='my-5' style={{ borderBottom: '1px solid lightGrey', maxWidth: '330px', margin: '0 auto' }}>

<h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>Transection History</h6>

<ul className={` ${transections.length > 3 ? 'scrollable-list' : ''}  `} >
  {transections.map((transection, index) => (
    <li key={index} className={`list-items   d-flex justify-content-between
     ${transection.amount > 0 ? 'bg-info-hover' : 'bg-warning-hover'} border-right`}>

    
      <span> <button className='btn2' onClick={()=>deleteTransection(index)}>X</button>{transection.description}</span>

      {/* this for text color 
      className ={transectin amount > 0 ? 'text-info' : 'text-warning' } */}

      <span > 
        {transection.amount > 0 ? `+${transection.amount}` : `${transection.amount}`}
      </span>

    </li>
  ))
  }
</ul>

</div>
    </div>
}