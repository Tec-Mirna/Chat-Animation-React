import Login from "./Login";
import LogOut from "./LogOut";
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';


const User = () => {
        // Ver si el usuario está logueado
        const [user] = useAuthState(auth)
         console.log(user) 

       // Mostrar la img si user existe, muestra la imagen y si no existe muestra la imagen de abajo
        const image = user ? user.photoURL : "https://res.cloudinary.com/dzb6jy2uq/image/upload/v1709703407/userImage_f8jnig.png"
        const name = user ? user.displayName : "Name User"

    return(
        <>
        <div className="right-side">
            <h1><i className="fa-solid fa-message"></i>Chat</h1>
            <article className="card-user">   {/* referrerPolicy="no-referrer al hacer la peticion de la imagen que no se envíe referencia de donde se pide la img*/}
                <img src={image} alt="user photo" referrerPolicy="no-referrer" />
                <p>{name}</p>
                {/* Si existe un usuario logueado, mostrame el boton de logOut */}
                {/* Si no existe muestrame el boton de login */}
                { user ?   <LogOut/> : <Login/> }

                

            </article>
 
            
        </div>
        </>
    )
}
export default User;