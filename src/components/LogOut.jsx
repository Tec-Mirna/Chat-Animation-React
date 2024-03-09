import { auth } from "../firebase";
import { signOut } from "firebase/auth";


const LogOut = () => {

    const logOut = () => {
        signOut(auth)
    }

    return(
        <>
         <button
          className="btn-login btn-logout"
         onClick={logOut}
       >
          {/* ícono copiado de awesome icon  */}
          <i className="fa-brands fa-google"></i>
          Logout
         </button>
        </>
    )
}
export default LogOut;