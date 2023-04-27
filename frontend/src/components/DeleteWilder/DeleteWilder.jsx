import axios from "axios";

import { useState } from "react";

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

export default DeleteWilder;