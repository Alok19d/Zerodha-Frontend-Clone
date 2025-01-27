import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserContext'

const UserProtectWrapper = ({children}) => {
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  useEffect(() => {
    if(!user){
      navigate('/open-account');
    }
  }, [user, navigate]);

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper