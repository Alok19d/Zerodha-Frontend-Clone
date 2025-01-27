import React,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateAccount from '../components/Layout/CreateAccount'
import {UserDataContext} from '../context/UserContext'

const Signup = () => {
  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);

  const [phone, setPhone] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

 function submitHandler(e){
    e.preventDefault();
    if(phone.length !== 10){
      setIsValid(false);
    }
    else{
      setUser({...user,phone: phone});
      navigate('/validate-mobile');
    }
  }

  return (
    <CreateAccount>
      <div className='signup-form'>
        <h2>Signup now</h2>
        <p className='form-subtext'>or track your existing application.</p>
        <form onSubmit={(e)=>{submitHandler(e)}}>
          <div className='mobile-input'>
            <label>Mobile Number</label>
            <input className={!isValid? 'invalid' : ''} 
            onChange={(e)=>{
              setPhone(e.target.value);
              setIsValid(true);
            }} type="number" placeholder='Your 10 digit mobile number' required />
            <span className='mobile-pretext'>+91</span>
          </div>
          <span id={!isValid? 'visible': ''} className='error-state'>Enter a valid mobile number</span>
          <p className='input-status'>You will receive an OTP on your number</p>
          <button className='signup-btn' type="submit">Continue</button>
          <p className='nri'>Want to open an NRI account?</p>
        </form>
      </div>
    </CreateAccount>
  )
}

export default Signup