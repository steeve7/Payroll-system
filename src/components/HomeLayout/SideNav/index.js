import React from 'react'
import {FaUser, FaCar, FaHome, FaPenSquare, FaMoneyBill, FaPiggyBank} from 'react-icons/fa'
import {Link} from 'react-router-dom'
// import Employee from '../../Section/Employee'

export default function index() {
    const navs = [
        {
            name:'Employees',
            icon: <FaUser size={15}/>,
            link: './'
        },
        {
            name:'Transport',
            icon: <FaCar size={15}/>,
            link: './transport'
        },
        {
            name:'Housing',
            icon: <FaHome size={15}/>,
            link: './housing'
        },
        {
            name:'Pension',
            icon: <FaPenSquare size={15}/>,
            link: './pension'
        },
        {
            name:'Tax',
            icon: <FaMoneyBill size={15}/>,
            link: './tax'
        },
        {
            name:'Payroll',
            icon: <FaPiggyBank size={15}/>,
            link: './payroll'
        },

    ]

  return (
    <div className='bg-white border-r-8 rounded-r-lg shadow-md w-[20%] absolute top-0 h-full'>
      <h2 className='px-7 text-black mt-5 text-[25px] text-end'>Payroll System</h2>
      <ul className='mt-10'>
        {navs.map((nav,i) => (
            <li key={i} className='text-black flex items-center px-7 gap-2 text-[20px] m-5'>
                <p>{nav.icon}</p>
                <Link to={nav.link}>{nav.name}</Link> 
            </li>
        ))}
      </ul>
    </div>
  )
}
