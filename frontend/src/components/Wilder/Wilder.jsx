import PropTypes from "prop-types";

import styles from "./Wilder.module.css";
import avatar from "../../assets/wilder-logo.png";

import Skill from "../Skill/Skill";
import DeleteWilder from "../DeleteWilder/DeleteWilder";


const Wilder = ({id, name, city, skills}) => {

    return (
        <article className={styles.card}>
            <img src={avatar} alt="avatar" />
            <h3>{name}</h3>
            <p>Lorem Ipsum</p>
            <h4>Wild Skills</h4>
            <ul className={styles.skills}>
                {skills.map((skill) => <Skill key={skill.title + Date.now()} skill={skill}/>)}
            </ul>
            <DeleteWilder id={id}/>
        </article>
    )
};

Wilder.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    skills: PropTypes.array
}

export default Wilder;