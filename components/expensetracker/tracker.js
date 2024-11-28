"use client"
import { useState } from 'react';
import './tracker.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '@/store/store';
import { addExpense, addIncome, deleteincome } from '@/store/slices/expense';
export default function MyTracker() {

  return <Provider store={store}>
    <Tracker></Tracker>
  </Provider>
}

function Tracker() {

  const { income, expense, balance, transections } = useSelector((store) => store);

//   let data = useSelector((store)=>{
//     return store.expenseSlice.data
// })


  let [description, setDescription] = useState('');
  let [amount, setAmount] = useState(0);
  let dispatch = useDispatch();

  let deleteTransection = (index)=>{
    dispatch(deleteincome(index))
}

  const addTransection = () => {
    console.log(amount);
    if (amount > 0) {
      dispatch(addIncome({ description, amount: parseFloat(amount) }))
      // parsefloat abc hatata ha pehle abc alphabet nai likhne
    } else {
      dispatch(addExpense({ description, amount: Math.abs(parseFloat(amount)) }))
      //  mathabs value ko absolute krta ha -5 = 5
    }

  }

  return <div className="container text-center">

    <h5 style={{ fontSize: '25px', fontWeight: 'bold' }}>Expense Tracker By Ahsan </h5>

    <div className='my-3' >
      <h3 style={{ fontSize: '22px', fontWeight: 'bold' }} >Current Balance</h3>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>${balance.toFixed(2)}</h2>
    </div>

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

    <div className='my-5' style={{ borderBottom: '1px solid lightGrey', maxWidth: '330px', margin: '0 auto' }}>

      <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>Transection History</h6>

      <ul className={` ${transections.length}`} >

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

    <div>
      <div className='my-4' style={{ borderBottom: '1px solid lightGrey', maxWidth: '330px', margin: '0 auto' }}>
        <h6 style={{ fontSize: '20px', fontWeight: 'bold' }}>Add New Transection</h6>
      </div>

      <form >
        <label className='label-style1'> <b>Description</b></label>
        <br />
        <input value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text" className='input-style' placeholder="Detalils of Transection" />

        <br />

        <label className='label-style2'> <b>Transection Amount</b></label>
        <br />
        <input value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number" className='input-style' placeholder="Dollar value " />

      </form>

      <button className='btn1' onClick={addTransection}> Add Transection</button>

    </div>

  </div>


}