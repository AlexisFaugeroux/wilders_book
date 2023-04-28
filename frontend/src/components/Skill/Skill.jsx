import PropTypes from "prop-types";
import styles from "./Skill.module.css";

const Skill = ({skill}) => {

    return (
        <li key={skill.votes + Date.now()}>
            {skill.title}
            <span className={styles.votes}> {skill.votes} </span>
        </li>
    )
};

Skill.propTypes = {
    skill: PropTypes.array,
}

export default Skill;