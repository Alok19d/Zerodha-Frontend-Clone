import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import CreateAccount from '../components/layout/CreateAccount'
import {UserDataContext} from '../context/UserContext'

const ValidatePhone = () => {
  const { user } = useContext(UserDataContext);
  const [otp, setOtp] = useState('');
  const [resendText,setResendText] = useState('');
  const [timer, setTimer] = useState(60);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if(timer === 0){
        setResendText('');
        return;
      }
      setTimer(timer-1);
      setResendText(`Resend OTP in ${timer} sec`);
      clearInterval(interval);
    },1000);
 
    return () => {
      clearInterval(interval);
    }
  },[timer,resendText]);

  function submitHandler(e){
    e.preventDefault();
    if(otp.length === 6){
      navigate('/lead-info');
    }
  }



  return (
    <CreateAccount>
        <div className='validate-form-container'>
          <h2>Confirm OTP</h2>
          <p className='vf-subtext'>Sent to +91 {user?.phone} <a>(change)</a></p>
          <form onSubmit={(e)=>{submitHandler(e)}} className='validate-form'>
            <div className='otp-input'>
              <label>Mobile OTP</label>
              <input onChange={(e)=>{setOtp(e.target.value)}} type="number" placeholder='Enter OTP' required/>
            </div>
            <p className='resend-option'>
              {(timer !== 0)? resendText : <span>Didn't receive OTP? Resend via <a>SMS</a> / <a>WhatsApp</a></span>
              }
            </p>
            <button className='signup-btn' type="submit">Continue</button>
          </form>
        </div>
    </CreateAccount>
  )
}

export default ValidatePhone;