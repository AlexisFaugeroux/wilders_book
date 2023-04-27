import styles from "./Skill.module.css";

const Skill = ({skill}) => {

    return (
        <div>
            <li key={skill.votes + Date.now()}>
                {skill.title}
                <span className={styles.votes}> {skill.votes} </span>
            </li>
        </div>
    )
};

export default Skill;