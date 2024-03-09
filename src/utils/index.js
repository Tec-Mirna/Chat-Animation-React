

export const formatDate = objDate => {
    const date = new Date(objDate?.seconds * 1000); /* Objeto a date */

     // Hora
    const time = `${date.getHours()}:${date.getMinutes()}`


    //Mostrar fecha en formato que queremos
     const options = { 
        month: 'long',
        day: 'numeric'
     } //En el chat solo se mostrará el día y mes, el año no.


 const newDate = date.toLocaleDateString('en-Us', options)
 return `${time} ${newDate}  `;
 
} 
 
