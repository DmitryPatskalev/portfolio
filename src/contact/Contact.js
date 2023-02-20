import React from 'react';
import style from '../common/styles/Container.module.scss'
import s from './Contact.module.scss'
import {Title} from "../common/title/Title";

export const Contact = () => {
   const onClickHundler = (e) => {
      e.preventDefault()
   }
   return (
     <div className={s.contactBlock}>
        <div className={`${style.container} ${s.contactContainer}`}>
           <Title title={'Contact'}/>
           <form className={s.contactsForm}>
              <input type="text"/>
              <input type="text"/>
              <textarea cols="30" rows="4"></textarea>
              <button onClick={onClickHundler} className={s.buttonSend}>Send</button>
           </form>

        </div>
     </div>

   );
};

