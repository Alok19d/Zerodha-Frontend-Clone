import React,{ useState, useContext } from 'react'
import CreateAccount from '../components/Layout/CreateAccount'
import { UserDataContext } from '../context/UserContext'

const LeadInfo = () => {
  const {user, setUser} = useContext(UserDataContext);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  function submitHandler(e){
    e.preventDefault();
    setUser({...user, fullName: fullName, email: email});
    console.log(user);
  }

  return (
    <CreateAccount>
      <div className='user-info'>
        <h3>Your Details</h3>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <button>
            <img src="./google-logo.svg"/>
            <span>Continue with Google</span> 
          </button>
          <div className='sep'>
            <span></span>
            <span>or</span>
            <span></span>
          </div>
          <div className='lead-name'>
            <input onChange={(e)=>{setFullName(e.target.value)}} type="text" placeholder='Enter Full Name' required/>
            <label>Name</label>
          </div>
          <div className='lead-email'>
            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter Email' required/>
            <label>Email</label>
          </div>
          <button className='signup-btn' type="submit">Continue</button>
          </form>
      </div>
    </CreateAccount>
  )
}

export default LeadInfo