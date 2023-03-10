import React from 'react';
import s from './Main.module.css'
import style from './../common/styles/Container.module.css'
import avatar from './../img/Loki.jpeg'

export const Main = () => {
   return (
     <div className={s.mainBlock}>
        <div className={style.container}>
           <div className={s.text}>
              <span>Hi There</span>
              <h1>I am Loki, prince of Asgard, son of Odin!</h1>
              <p>Front End Developer</p>
           </div>
           <div className={s.photo}>
              <img className={s.avatar} src={avatar} alt={'avatar'}/>
           </div>
        </div>
     </div>
   );
};

