import React from 'react';
import s from './Projects.module.css'
import style from "../common/styles/Container.module.css";
import {Project} from "./project/Project";


export const Projects = () => {
   return (
     <div className={s.projectsBlock}>
        <div className={`${style.container} ${s.projectContainer}`}>
           <h2 className={s.title}>My Projects</h2>
           <div className={s.projectItems}>
              <Project/>
           </div>
        </div>
     </div>
   );
};

