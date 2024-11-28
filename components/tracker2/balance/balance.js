
"use client"
import { store } from "@/store/store"
import { Provider, useSelector } from "react-redux"

export default function Balance(){
    return <Provider store={store}>
        <MyBalance></MyBalance>
    </Provider>
}

function MyBalance (){
const {income , expense } = useSelector((store)=> store)

    return <div>
        <div className='d-flex justify-content-center text-center  rounded-2 '>
  <div className='px-5 py-2 ' style={{ backgroundColor: "#fff", boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)' }}>
    <span> <b>Income</b></span>

    <h4 className='text-info'>${income}</h4>
  </div>

  <div className='px-5 py-2 ' style={{ backgroundColor: "#fff", boxShadow: '2px 4px 6px rgba(0, 0, 0, 0.3)' }}>
    <span><b>Expense</b></span>
    <h4 className='text-warning'>${expense}</h4>
  </div>
</div>
    </div>
}