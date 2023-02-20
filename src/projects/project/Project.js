import React from 'react';
import s from "./Project.module.scss";
import todolist from "../../img/todolist.jpeg";
import social from "../../img/social.jpeg";


const projects = [
   {id: 1, img: todolist, title: 'name of project', description: 'short description'},
   {id: 2, img: social, title: 'name of project', description: 'short description'},
]

export const Project = () => {
   return (
     <>
        {projects.map(p => {
           return <div className={s.project}>
              <div key={p.id} className={s.avatarProject}>
                <img className={s.projectImg} src={p.img} alt={'todolist'}/>
              </div>
              <div className={s.projectName}>{p.title}</div>
              <div className={s.projectDescription}>{p.description}</div>
           </div>
        })}
     </>
   );
};
