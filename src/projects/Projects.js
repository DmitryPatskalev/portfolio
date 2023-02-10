import React from 'react';
import s from './Projects.module.css'
import style from "../common/styles/Container.module.css";

export const Projects = () => {
   return (
     <div className={s.projectsBlock}>
        <div className={`${style.container} ${s.projectContainer}`}>
           <h2 className={s.title}>My Projects</h2>
           <div className={s.projectItems}>
              <div className={s.project}>
                 <div className={s.avatarProject}>Project Avatar</div>
                 <div className={s.projectName}>name of project</div>
                 <div className={s.projectDescription}>short description</div>
              </div>
              <div className={s.project}>
                 <div className={s.avatarProject}>Project Avatar</div>
                 <div className={s.projectName}>name of project</div>
                 <div className={s.projectDescription}>short description</div>
              </div>
           </div>
        </div>
     </div>
   );
};

