import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useAuthState } from 'react-firebase-hooks/auth';




 export const Chat = () => {

    const [message, setMessage] = useState([]);
    const [user] = useAuthState(auth)

    /* Llamada a la bd */
useEffect(() => {  // nombre de la coleccion(firrebase)   timestamp, atributo en firebase
    const newQuery = query(collection(db, 'message'), orderBy('timestamp'))
    //Recupera la base de datos en el estado actual
    // onSnapshot ayuda a recuperar cada cambio
    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
        let currentMessages = [];
        // Recorrer el arreglo
        querySnapshot.forEach(item => {
                            // Recupera el id que se encuentra en cada item (firebase)
            currentMessages.push({ content: item.data(), id:item.id }) 
        })
        setMessage(currentMessages);
    })
    return unsubscribe;
}, [])

    return(
        <>
            <section className="chat-content">
                {
                     message && message.map(item => (
                        <Message
                           key={item.id}
                           message={item.content}
                        />
                     ))


                }
                {user &&   <SendMessage/>}
           
            </section>
        </>
    )
}
export default Chat;