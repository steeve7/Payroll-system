import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function button() {
  return (
    <div>
    <div className='space-x-4 absolute right-[55rem] mt-5'>
    <Link to="/payroll" className='bg-white border-slate-700 border px-2 py-2 rounded-full text-sm text-[20px]
    text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>Payroll Logs</Link>
    <Link to="./newpay" className='bg-white border-slate-700 border px-2 py-2 rounded-full text-sm text-[20px]
    text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>New Pay</Link>
    </div>
    </div>
  )
}
