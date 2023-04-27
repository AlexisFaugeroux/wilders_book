import styles from "./Wilder.module.css";
import avatar from "../../assets/wilder-logo.png";

import Skill from "../Skill/Skill";


const Wilder = ({name, city, skills}) => {

    return (
        <article className={styles.card}>
            <img src={avatar} alt="avatar" />
            <h3>{name}</h3>
            <p>{city}</p>
            <h4>Wild Skills</h4>
            <ul className={styles.skills}>
                {skills.map((skill) => <Skill key={skill.title + Date.now()} skill={skill}/>)
                }
            </ul>
        </article>
    )
}

export default Wilder;