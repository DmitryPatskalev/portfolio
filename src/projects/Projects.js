import React from 'react';
import s from './Projects.module.css'
import style from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../common/title/Title";


export const Projects = () => {
   return (
     <div className={s.projectsBlock}>
        <div className={`${style.container} ${s.projectContainer}`}>
           <Title title={'My Projects'}/>
           <div className={s.projectItems}>
              <Project/>
           </div>
        </div>
     </div>
   );
};

