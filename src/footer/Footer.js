import React from 'react';
import s from './Footer.module.css'
import style from './../common/styles/Container.module.css'


export const Footer = () => {
   return (
     <div className={s.footerBlock}>
        <div className={`${style.container} ${s.footerContainer}`}>
           <h3 className={s.titleName}>Patskalev Dmitry</h3>
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

