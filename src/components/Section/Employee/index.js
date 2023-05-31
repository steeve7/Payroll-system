import React, { useEffect, useState } from 'react'
import Header from '../../HomeLayout/Header'
import axios from 'axios'
import {FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Index() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  // const [show, setShow] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8030/employes')
    .then(res => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data)
    })
  })
  return (
    <div>
    <Header/>
      <h2 className='absolute left-80 top-5 text-white'>Employees</h2>
      <div className='absolute right-8 mt-5 bg-white border-slate-700 border px-2 py-2 rounded-full text-sm text-[20px]
       text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>
       <Link to="./create">Add Employee</Link>
       </div>
      <div className="mt-14 absolute right-60 w-1/2">
        <table className='w-full rounded-lg shadow-lg'>
          <tbody className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              {columns.map((c,i) => (
                <th key={i} className='p-3 text-sm font-semibold tracking-wide text-left'>{c}</th>
              ))}
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            </tr>
          </tbody>
          {records.map((d, i) => (
            <tr key={i} className='bg-gray-50 hover:bg-white'>
              <td className='p-3 text-sm text-gray-700 border-b-2'>{d.name}</td>
              <td className='p-3 text-sm text-gray-700 border-b-2'>{d.position}</td>
              <td className='p-3 text-sm text-gray-700 border-b-2'>{d.contact}</td>
              <td className='p-3 text-sm text-gray-700 border-b-2'>{d.status}</td>
              <td className='p-3 text-sm text-gray-700 border-b-2'>{d.email}</td>
              <td className='p-3 text-sm text-gray-700 border-b-2'><FaTrash/></td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}
