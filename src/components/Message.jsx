import { auth } from "../firebase";
import { formatDate } from "../utils";


const Message = ({ message }) => {

        let newStyle = 'message'
        /* Si existe un usuario logueado */
        if (auth.currentUser) {
            const user = auth.currentUser.uid;
            const newUser = message.uid
            newStyle = user === newUser ? 'my-message' : 'message';
        } /* console.log(message.timestamp) */

    return(
        <>
        {/* Nos llega el mensaje */}
        <article className={newStyle}>
            <div>
                <div className="text-message">
                      {/* .text es uno de los campos que estan en los registros de firestore */}
                     <p className="text">{message.text}</p>
                </div>
                <p className="time">{formatDate(message.timestamp)}</p>
            </div>
            {/* Mostrar foto junto al mensaje enviado y recibido */}
             <img src={message.photo} alt="user photo" referrerPolicy="no-referrer" />
        </article>
       
        </>
    )
}
export default Message;