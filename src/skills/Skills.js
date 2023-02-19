import React from 'react';
import s from './Skills.module.css'
import style from './../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../common/title/Title";

const arrOfSkills = [
   {id: 'react', title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur'},
   {id: 'js', title: 'JS', description: 'Lorem ipsum dolor sit amet, consectetur'},
   {id: 'type_script', title: 'Type Script', description: 'Lorem ipsum dolor sit amet, consectetur'},
   {id: 'html_css', title: 'HTML/CSS', description: 'Lorem ipsum dolor sit amet, consectetur'},
   {id: 'node_js', title: 'Node JS', description: 'Lorem ipsum dolor sit amet, consectetur'},
   {id: 'angular', title: 'Angular', description: 'Lorem ipsum dolor sit amet, consectetur'},
]

export const Skills = () => {
   const skills = arrOfSkills.map(s => {
      return <Skill key={s.id} title={s.title} description={s.description}/>
   })
   return (
     <div className={s.skillsBlock}>
        <div className={`${style.container} ${s.skillsContainer}`}>
           <Title title={'Skills'}/>
           <div className={s.skills}>
              {skills}
           </div>
        </div>
     </div>
   );
};

