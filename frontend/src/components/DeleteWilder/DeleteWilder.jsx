import PropTypes from 'prop-types';
import axios from "axios";

import styles from "./DeleteWilder.module.css"

const DeleteWilder = ({id}) => {

    return (
        <button
            onClick={() => {
                // e.preventDefault();
                axios.delete(`http://localhost:5000/api/wilder/${id}`)
            }}
        >
            Delete Wilder
        </button>
    )
};

DeleteWilder.propTypes = {
    id: PropTypes.number.isRequired
}

export default DeleteWilder;