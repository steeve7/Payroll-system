import Header from '../../HomeLayout/Header'
import Button from '../button';

export default function Index() {


  return (
    <div>
      <Header/>
      <h2 className='absolute left-80 top-5 text-white'>Payroll</h2>
      <Button/>
      <div className='absolute right-96 mt-10 w-1/2'>
        <h3 className='mt-10 font-bold ml-5'>Payroll Logs</h3>
        <form className='mt-5 bg-white shadow-md py-5'>
          <select className='p-3 text-sm font-semibold tracking-wide text-left'>
            <option value="employee">Select Employee</option>
          </select>
          <input type="text" placeholder='Starting Date' className='p-4 border-0 focus:outline-none'/>
          <input type="text" placeholder='Ending Date' className='p-3 focus:outline-none' />
          <button className='bg-white border-slate-700 border px-3 py-2 rounded-lg text-sm text-[20px]
        text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>Run</button>
        </form>
      </div>
    </div>
  )
}
