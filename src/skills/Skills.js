import React from 'react';
import s from './Skills.module.css'
import style from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
   return (
     <div className={s.skillsBlock}>
        <div className={`${style.container} ${s.skillsContainer}`}>
           <h2 className={s.title}>Skills</h2>
           <div className={s.skills}>
              <Skill/>
           </div>
        </div>
     </div>
   );
};
