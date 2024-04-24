import './App.css';
import { useState } from 'react';
import DropDown from './components/dropdown';
import { AlertDialogBox } from './components/alertModal';

function App() {
  const [loginType, setLoginType] = useState('Login')
  const [userType, setUserType] = useState(null);
  const [error, setError] = useState(null);
  const handleLoginType = (type) => {
    setLoginType(type);
    setUserType(type);
  }
  const handleLogin = () => {
    if(loginType === "Login"){
      setError("Please Select Login Type");
    }
  };

  return (
    <div className="max-w-full container mx-auto flex flex-col justify-center">
      <div className="header flex justify-center mb-20">
        <h1 className='text-red-600 font-mono underline text-4xl'>{loginType}</h1>
      </div>
      <div className='flex justify-center mb-10 mr-64'>
        <DropDown onOptionSelect={handleLoginType}/>
      </div>
      <div className='form flex flex-col items-center justify-center mb-32'>
        <div className='text-2xl flex flex-row items-center'>
          <label className='font-mono text-zinc-50 mr-5'>Username</label>
          <input type='text' className='font-mono text-xl border-2 border-zinc-50 rounded-md p-2 w-60' />
        </div>
        <div className='text-2xl flex flex-row items-center mt-5'>
          <label className='font-mono text-zinc-50 mr-5'>Password</label>
          <input type='password' className='font-mono text-xl border-2 border-zinc-50 rounded-md p-2 w-60' />
        </div>
        <button className='btn-custom ml-3 bg-blue-500 mt-10 rounded p-2 text-xl w-32 font-mono' onClick={() => handleLogin()}>
          Login
        </button>
      </div>
      <div className='register flex justify-center'>
        <p className='text-white font-mono text-xl'>Don't have an account? <span className='text-blue-500 underline hover:cursor-pointer'>Contact Our Administrator</span></p>
      </div>
      {error && <AlertDialogBox message={error} onClose={()=>setError(null)} />}
    </div>
  );
}

export default App;
