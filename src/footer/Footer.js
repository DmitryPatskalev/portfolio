import React from 'react';
import s from './Footer.module.scss'
import style from '../common/styles/Container.module.scss'


export const Footer = () => {
   return (
     <div className={s.footerBlock}>
        <div className={`${style.container} ${s.footerContainer}`}>

           <h2 className={s.titleName}>Patskalev Dmitry</h2>
           <div className={s.socialNetworkBlock}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
           </div>
           <div className={s.rightReserved}>© All Right Reserved</div>
        </div>
     </div>
   );
};

