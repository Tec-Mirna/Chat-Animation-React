import { useState } from "react";
import { addDoc, collection, serverTimestamp  } from "firebase/firestore";
import {auth, db} from "../firebase"
import EmojiPicker from 'emoji-picker-react';




const SendMessage = () => {

    const [input, setInput] = useState('');
    /* Los emogis estanran ocultos */
    const [open, setOpen] = useState('close'); //Visibilidad del selector de emojis

    const sendMessage = async (e) => {
        e.preventDefault();
    /* De la consola, datos del correo  */
    const {uid, displayName, photoURL} = auth.currentUser;
    await addDoc(collection(db, 'message'), {
        /* Guardar estos datos al enviar un mensaje */
        text: input,
        name: displayName,
        uid,
        photo: photoURL,
        timestamp: serverTimestamp()
    })/* Al enviar queda vacío */
    setInput("")
}



   const emoji = () => setOpen ('open');
   const closeEmoji = () => setOpen ('close');

   const onEmojiClick = ( emoji) => { /* Debe recibir emogi como parámetro según la documentación de la librería */
   
 /*    setChosenEmoji(emojiObject); */
 setInput(prevInput => prevInput + emoji.emoji);
};
    return(
        <>
     
        <form onSubmit={sendMessage}>
            <button type="button"
            className="btn-emoji"
            onClick={emoji}>
                {/* Icono para los emojis*/}
                <i className="fa-regular fa-face-smile"></i>
            </button>

            <div className={open}>
                <button
                type="button"
                className="close-emoji"
                onClick={closeEmoji}
                >
             <i className="fa-solid fa-xmark"></i>
                </button>
                <EmojiPicker onEmojiClick={onEmojiClick}/>
            </div>
            <input type="text" placeholder="Enter your message"  value={input}  onChange={e=>setInput(e.target.value)}  />
            <button type="submit"
            > Send</button>
        </form>
     
        </>
    )
}
export default SendMessage;