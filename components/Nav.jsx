import React from 'react'
import auth from "../firebase";
 import { NavLink } from 'react-router-dom';
// import { StateContext } from "../context/Context";
import { useAuthState } from 'react-firebase-hooks/auth'
const Nav = () => {

  // const [show, setShow] = useState(false);

  // const { state1 } = useContext(StateContext);
  // const [state, setstate] = state1;

  // const [user, setUser] = useState(null);

  // const handleLogin = () => {};
  // const handleLogout = () => {
  //   setUser(auth.signOut())
  // }
  const[user , loading , error] = useAuthState(auth);
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className='Nav'>
        <div className='navebar'>
            <div className='logo'>
            <NavLink to="/dashboard">quickBooks</NavLink>
            </div>
            <div className='links'>
   
                { user ? 
                <NavLink to='/' onClick={()=>auth.signOut()}>Logout</NavLink>
               :
               <>
               <NavLink to='/login'>Login</NavLink>
               <NavLink to='/signup'>Signup</NavLink> </>}

            </div>  
        </div>
    </div>
  )
}

export default Nav