// import axios from "axios";
import { useState } from "react"
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from '../../HomeLayout/Header'

export default function Index() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('test');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8030/employes', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify()
        }).then(() => {
            console.log('new blog added');
            // history.push('/');
        })

    }

  return (
    <div>
    <Header/>
    <div className='w-[30%] m-auto text-center mt-20'>
        <form onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
            <label className='text-left block'>Name:</label>
            <input type="text"
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Position:</label>
            <input type="text"
            required 
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Contact:</label>
            <input type="text"
            required 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <label className='text-left block'>Status:</label>
                <select className='w-full py-[6px] px-[10px] my-[10px] border block'
                value={status}
                 onChange={(e) => setStatus(e.target.value)}>
                    <option value="test">test</option>
                    <option value="single">single</option>
                    <option value="married">married</option>
                </select>
            <label className='text-left block'>Email:</label>
            <input type="email"
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full py-[6px] px-[10px] my-[10px] border block'
            />
            <button className='bg-white border-slate-700 border px-2 py-2 rounded-full text-sm text-[20px]
            text-black hover:text-white hover:bg-slate-700 transition duration-700 ease-in-out'>Add Employee</button>
    </form>
    </div>
    </div>
    
  )
}
