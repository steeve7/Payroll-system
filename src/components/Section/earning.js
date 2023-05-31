import React from 'react'
import Header from '../HomeLayout/Header'
import Button from './button'
import Deduction from './deduction'

export default function earning() {
  return (
    <div>
    <Header/>
    <Button/>
      <div className='w-[20%] text-center mt-20 ml-[20rem] bg-white shadow-md px-10 py-10 rounded-lg'> 
        <form>
        <h2 className='text-sm font-bold'>NEW PAY</h2>
            <label className='text-left block'>Employee:</label>
            <input type="text"
            required 
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Pay Date:</label>
            <input type="date"
            required 
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Starting Date:</label>
            <input type="date"
            required
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Ending Date:</label>
            <input type="date"
            required 
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <button className='bg-white border-slate-700 border px-2 py-2 rounded-lg text-sm text-[20px]
            text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>Enter</button>
    </form>
      </div>
      <div className='absolute right-5 top-40 w-1/2'>
      <h2 className='uppercase text-sm font-bold'>Earnings</h2>
      <table className='w-full rounded-lg shadow-lg'>
        <tbody className='bg-gray-50 border-b-2 border-gray-200 '>
          <tr className='py-5'>
            <th></th>
            <th>Unit</th>
            <th>Rate</th>
            <th>Total</th>
          </tr>
        </tbody>
        <tr className='border-b-2'>
          <th p-3 text-sm text-gray-700 border-b-2>Ordinary hours worked</th>
          <th p-3 text-sm text-gray-700 border-b-2>---</th>
          <th p-3 text-sm text-gray-700 border-b-2>350</th>
          <th p-3 text-sm text-gray-700 border-b-2>---</th>
        </tr>
        <tr>
          <th p-3 text-sm text-gray-700 border-b-2></th>
          <th p-3 text-sm text-gray-700 border-b-2></th>
          <th p-3 text-sm text-gray-700 border-b-2>Gross Pay</th>
          <th p-3 text-sm text-gray-700 border-b-2>---</th>
        </tr>
      </table>
      <button to="./newpay" className='bg-white border-slate-700 border px-2 py-2 rounded-lg text-sm text-[20px]
      text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out mt-5 absolute right-0'>Submit</button>
    </div>
    <Deduction/>
    </div>
  )
}
