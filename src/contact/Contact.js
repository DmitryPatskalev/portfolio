import React from 'react';
import style from './../common/styles/Container.module.css'
import s from './Contact.module.css'

export const Contact = () => {
   return (
     <div className={s.contactBlock}>
        <div className={`${style.container} ${s.contactContainer}`}>
           <h2 className={s.title}>Contact</h2>
           <form className={s.contactsForm}>
              <input type="text"/>
              <input type="text"/>
              <textarea name="" id="" cols="30" rows="4"></textarea>
           </form>
           <button className={s.buttonSend}>Send</button>
        </div>
     </div>

   );
};

