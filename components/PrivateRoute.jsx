import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { useNavigate } from "react-router-dom";
//import { StateContext } from "../context/Context";
import auth from "../firebase";


const PrivateRoute = ({children}) => {


  //const { state1 } = useContext(StateContext);
  //  const [state , setstate] = state1;

    const navigation = useNavigate();
      useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user ) {
        
        navigation('/dashboard');
      } else {
        navigation('/login');
      
      }
    });

  }, []);
    
  return children
}

export default PrivateRoute