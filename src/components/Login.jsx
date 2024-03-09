import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
// user actual logueado 
import { auth } from "../firebase";


const Login = () => {

       const googleLogin = () => {
         const provider = new GoogleAuthProvider();
         signInWithRedirect(auth, provider)
    }
    return(
        <>
       <button
       className="btn-login"
       onClick={googleLogin}
       >
        {/* ícono copiado de awesome icon  */}
        <i className="fa-brands fa-google"></i>
        Sign in with google
       </button>
        </>
    )
}
export default Login;